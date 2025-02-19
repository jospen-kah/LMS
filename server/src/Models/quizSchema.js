const express = require('express');
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }], // Array of options
    correctAnswer: { type: String, required: true }
});

const QuizSchema = new mongoose.Schema({
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true }, 
    questions: [QuestionSchema] // Embedded Questions
}, { timestamps: true });

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);
