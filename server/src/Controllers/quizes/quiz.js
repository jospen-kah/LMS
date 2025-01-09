const Quiz = require('../../Models/quizSchema');



const express = require("express");
// const Quiz = require("../models/Quiz");


// Create a new quiz
 async function createQuiz(req, res) {
  try {
    const { title, questions } = req.body;
    const newQuiz = new Quiz({ title, questions });
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all quizzes
 async function allQuizzes (req, res) {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single quiz by ID
 async function singleQuiz (req, res)  {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a quiz
async function updateQuiz (req, res) {
  try {
    const { title, questions } = req.body;
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { title, questions },
      { new: true }
    );
    if (!updatedQuiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json(updatedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a quiz
 async function deleteQuiz (req, res)  {
  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!deletedQuiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



module.exports = {createQuiz,  allQuizzes,  singleQuiz, updateQuiz,deleteQuiz};