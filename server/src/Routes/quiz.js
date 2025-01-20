const express  = require('express');
const quizRouter = express.Router()
const {addQuiz, evaluateQuiz} = require('../Controllers/quizes/quiz')

quizRouter.post('/add', addQuiz);
quizRouter.post('/evaluate/:id', evaluateQuiz)


module.exports = quizRouter;