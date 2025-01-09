const express  = require('express');
const quizRouter = express.Router()
const {createQuiz,  allQuizzes,  singleQuiz, updateQuiz,deleteQuiz} = require('../Controllers/quizes/quiz')

quizRouter.post('/', createQuiz);
quizRouter.get('/', allQuizzes),
quizRouter.get('/:id', singleQuiz);
quizRouter.put('/:id', updateQuiz);
quizRouter.delete('/:id', deleteQuiz)


module.exports = quizRouter;