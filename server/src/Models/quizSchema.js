const mongoose = require("mongoose");



const quizSchema = new mongoose.Schema({
  questions: [{question: String, options: [String], correctAnswer: String }],
  passingScore: { type: Number, required: true}
  
});

module.exports = mongoose.model("Quiz", quizSchema);
