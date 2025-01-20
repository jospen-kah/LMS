const Quiz = require('../../Models/quizSchema');


//Add a quiz
async function addQuiz ( req, res){
  try{
    const { questions, passingScore } = req.body;

    if(!questions ){
      return res.status(400).json({ error: "Questions and passingScore are required"})
    }

    for (let question of questions){
      const{ question: text, options, correctAnswer} = question;
    
      if (!text || !options || !correctAnswer){
        return res.status(400).json({ error: "Each question must have a question, option, and correct Answer"})
      }
      if(!Array.isArray(options) || options.length < 2){
        return res.status(400).json({ error: "Each question must have at least two options"})
      }

      if(!options.includes(correctAnswer)){
        return res.status(400).json({ error: `The correctAnswer correctAnser ${correctAnswer} must bbe provided in the options` })
      }

     }
        const quiz = new Quiz({ questions, passingScore});
        const savedQuiz = await quiz.save();
        res.status(201).json({message: "quiz created successfully", savedQuiz});

}
catch (error) {
  res.status(500).json({ error: error.message });
}
}

// evauate the quiz
async function evaluateQuiz(req, res) {
  const { answers, quizId } = req.body;

  try {
    // Fetch the quiz by ID
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const results = [];
    let correctAnswersCount = 0; // Correct the variable name and initialize it

    // Loop through the provided answers
    answers.forEach(({ questionId, answer }) => {
      const quizQuestion = quiz.questions.find((q) => q._id.toString() === questionId);

      if (!quizQuestion) {
        results.push({
          questionId,
          correct: false,
          message: "Question not found in the quiz",
        });
      } else if (quizQuestion.correctAnswer === answer) {
        correctAnswersCount++; // Increment the count of correct answers
        results.push({
          questionId,
          correct: true,
          message: "Correct answer!",
        });
      } else {
        results.push({
          questionId,
          correct: false,
          message: "Incorrect Answer. Try again.",
        });
      }
    });

    // Calculate the score
    const totalQuestions = quiz.questions.length;
    const score = (correctAnswersCount / totalQuestions) * 100;
    const passed = score >= quiz.passingScore;

    // Return the results and score
    return res.status(200).json({
      results,
      score,
      passed,
      message: passed
        ? "Congratulations! You passed the quiz."
        : "Unfortunately, you did not pass the quiz.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports =  { addQuiz, evaluateQuiz};