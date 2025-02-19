const Quiz = require('../../Models/QuizSchema');
const Lesson = require('../../Models/LessonSchema');

// Create a quiz for a lesson
async function createQuiz(req, res) {
    try {
        const { title, questions, lessonId } = req.body;
        // Check if the lesson exists
        const lesson = await Lesson.findById(lessonId);
        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }

        // Create quiz
        const quiz = new Quiz({ title, questions, lesson: lessonId });
        await quiz.save();

        // Add quiz to lesson
        lesson.quiz = quiz._id;
        await lesson.save();

        res.status(201).json({ message: "Quiz created successfully", quiz });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

// Get all quizzes
async function getQuizzes(req, res) {
    try {
        const quizzes = await Quiz.find().populate('lesson', 'title');
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

// Get a single quiz
async function getQuiz(req, res) {
    try {
        const { quizId } = req.params;
        const quiz = await Quiz.findById(quizId).populate('lesson', 'title');

        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

// Update a quiz
async function updateQuiz(req, res) {
    try {
        const { quizId } = req.params;
        const { title, questions } = req.body;

        const updatedQuiz = await Quiz.findByIdAndUpdate(
            quizId,
            { title, questions },
            { new: true, runValidators: true }
        );

        if (!updatedQuiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        res.status(200).json({ message: "Quiz updated successfully", quiz: updatedQuiz });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

// Delete a quiz
async function deleteQuiz(req, res) {
    try {
        const { quizId } = req.params;

        // Find and delete the quiz
        const deletedQuiz = await Quiz.findByIdAndDelete(quizId);
        if (!deletedQuiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        // Remove the quiz from its lesson
        await Lesson.findByIdAndUpdate(deletedQuiz.lesson, {
            $unset: { quiz: 1 }
        });

        res.status(200).json({ message: "Quiz deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

module.exports = {
    createQuiz,
    getQuizzes,
    getQuiz,
    updateQuiz,
    deleteQuiz
};
