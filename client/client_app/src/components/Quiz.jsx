import React, { useEffect, useState } from "react";
import axios from "axios";

function Quiz({ ModuleId, setSelectedQuiz }) {
    const [quiz, setQuiz] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    // Fetch quiz for the selected lesson
    useEffect(() => {
        if (!ModuleId) return; // Avoid fetching if no lesson is selected

        axios
            .get(`http://localhost:5000/quiz/${ModuleId}`)
            .then((response) => {
                setQuiz(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [lessonId]);

    // Handle option selection
    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer
        }));
    };

    // Submit quiz answers
    const handleSubmit = () => {
        axios
            .post(`http://localhost:5000/quiz/${ModuleIdId}/submit`, { answers })
            .then((response) => setScore(response.data.score))
            .catch((error) => console.error("Error submitting quiz:", error));
    };

    return (
        <div className="quiz-container">
            <h2>Quiz for Lesson {lessonId}</h2>

            {loading && <p>Loading quiz...</p>}
            {error && <p>Error: {error}</p>}

            {quiz.length > 0 && (
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    {quiz.map((q, index) => (
                        <div key={q._id} className="quiz-question">
                            <p>{index + 1}. {q.question}</p>
                            {q.options.map((option, i) => (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name={`question-${q._id}`}
                                        value={option}
                                        onChange={() => handleAnswerChange(q._id, option)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button type="submit">Submit Quiz</button>
                </form>
            )}

            {score !== null && <h3>Your Score: {score} / {quiz.length}</h3>}

            <button onClick={() => setSelectedQuiz(null)}>Back to Lesson</button>
        </div>
    );
}

export default Quiz;
