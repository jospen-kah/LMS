cons mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    option: [{ type: String, required: true}],
    correctAnswer: { type: String, required: true}
});

const quizSchema = new mongoose.Schema({
    title: {type: String, required: true},
    questions: { type: String, required: true}
})

module.exports = mongoose.model("Quiz", quizSchema)