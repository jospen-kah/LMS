const Quiz = require('../../Models/quizSchema');

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
module.exports =  { addQuiz};