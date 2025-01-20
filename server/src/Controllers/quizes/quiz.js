const Quiz = require('../../Models/quizSchema');


//Add a quiz
async function addQuiz ( req, res){
  try{
    const { questions, passingScore } = req.body;

    if(!questions || !passingScore){
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
 res.status(201).json(savedQuiz);

}
catch (error) {
  res.status(500).json({ error: error.message });
}
}

// evauate the quiz
async function evaluateQuiz( req, res){
  const {answers,quizId} = req.body
  try{
    const quiz =  await Quiz.findById(quizId);

    if(!quiz){
      return res.status(404).json({
        message: "Quiz not found"
      }
    
      const result = [];
      let correctAnswer = 0;

      answers.forEach( ({questionId, answer}) => {
        const quizQuestion = quiz.questions.find((q) => q._id.toString() == questionId);

        if(!quizQuestion){
          results.push({
            questionId, 
            correct: false;
            message: "questiion not found in the quiz"
          });
        } else if(quizQuestion.correctAnswer ===  answer){
          correctAnswerscount++;
          result.push({ 
             questionId,
          correct: true,
          message: "Correct answer!"
          })
         
        }else {
          result.push({
            questionId,
            correct: false,
            message: "Incorrect Answer. Try again"
          });
        }
      });

      //calculate the score
      const totalQuestions = quiz.questions.length;
      const score = (correctAnswerscount/ totalQuestions) * 100;
      const passed = score >= quiz.passingScore;

      //Return the results and score
      return res.status(200).json({
        results,
        score,
        passed,
        message: passed
        ? "Congratulations! You passed the quiz"
        : "Unfortunately, you did not pass the quiz."
      });

    )
    }
    catch(error){
      return res.status(500).json({error: error.message})
    }
  }
 
}
module.exports =  { addQuiz, evaluateQuiz};