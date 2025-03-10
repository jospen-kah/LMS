import React, { useEffect, useState } from "react";
import axios from "axios";

function Quiz({ moduleId, setSelectedQuiz }) {
    const [quiz, setQuiz] = useState([]); // Store questions array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        if (!moduleId) return;

        console.log("Fetching quiz for moduleId:", moduleId);

        axios.get(`http://localhost:5000/quiz/${moduleId}`)
            .then((response) => {
                console.log("Raw Quiz Data:", response.data);

                if (Array.isArray(response.data) && response.data.length > 0) {
                    setQuiz(response.data[0].questions || []); // Extract "questions" array
                } else {
                    console.error("Unexpected response structure:", response.data);
                    setQuiz([]); // Default to empty array if invalid
                }

                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching quiz:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [moduleId]);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitting answers:", answers);

        // Ensure answers object is not empty before submitting
        if (Object.keys(answers).length === 0) {
            alert("Please answer the questions before submitting.");
            return;
        }

        axios.post(`http://localhost:5000/quiz/${moduleId}/submit`, { answers })
            .then((response) => {
                console.log("Quiz submission response:", response.data);
                setScore(response.data.score);
            })
            .catch((error) => {
                console.error("Error submitting quiz:", error);
            });
    };

    return (
        <div className="quiz-container">
            <h2>Quiz for Module {moduleId}</h2>

            {loading && <p>Loading quiz...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {!loading && quiz.length === 0 && <p>No quiz available for this module.</p>}

            {quiz.length > 0 && (
                <form onSubmit={handleSubmit}>
                    {quiz.map((q, index) => (
                        <div key={q._id} className="quiz-question">
                            <p>{index + 1}. {q.questionText}</p>

                            {q.options && q.options.length > 0 ? (
                                q.options.map((option, i) => (
                                    <label key={i}>
                                        <input
                                            type="radio"
                                            name={`question-${q._id}`}
                                            value={option}
                                            onChange={() => handleAnswerChange(q._id, option)}
                                        />
                                        {option}
                                    </label>
                                ))
                            ) : (
                                <p style={{ color: "red" }}>No options available for this question.</p>
                            )}
                        </div>
                    ))}
                    <button type="submit">Submit Quiz</button>
                </form>
            )}

            {score !== null && <h3>Your Score: {score} / {quiz.length}</h3>}

            <button onClick={() => setSelectedQuiz(null)}>Back to Modules</button>
        </div>
    );
}

export default Quiz;
