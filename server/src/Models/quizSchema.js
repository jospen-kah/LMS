const mongoose = require("mongoose");

// Define the Question schema
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true }
});

// Define the Quiz schema
const quizSchema = new mongoose.Schema({
  questions: { type: [questionSchema], required: true }, // Use questionSchema as the type for questions
  passingScore: { type: Number, required: true }
});

// Export the Quiz model
module.exports = mongoose.model("Quiz", quizSchema);
