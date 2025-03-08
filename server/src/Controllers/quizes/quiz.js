const Quiz = require('../../Models/QuizSchema');
const Module = require('../../Models/ModuleSchema');

// Create a quiz for a lesson
async function createQuiz(req, res) {
    try {
        const { questions, moduleId } = req.body;
        // Check if the lesson exists
        const module = await Module.findById(moduleId);
        if (!module) {
            return res.status(404).json({ message: "module not found" });
        }

        // Create quiz
        const quiz = new Quiz({  questions, module: moduleId });
        await quiz.save();

        // Add quiz to lesson
        module.quiz = quiz._id;
        await module.save();

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

// Get quiz with respect to the module
async function getQuiz(req, res) {
    try {
        const { moduleId } = req.params;
        console.log("ModuleId: ", moduleId)
        const quizzes = await Quiz.find({module: moduleId}).populate('module', 'title');

        if (quizzes.length === 0) {
            return res.status(404).json({ message: "No quizzes found for this Module" });
        }

        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

// Update a quiz
async function updateQuiz(req, res) {
    try {
        const { quizId } = req.params;
        const { questions } = req.body;

        const updatedQuiz = await Quiz.findByIdAndUpdate(
            quizId,
            {  questions },
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
