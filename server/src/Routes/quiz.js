const express  = require('express');
const quizRouter = express.Router()
const {createQuiz, getQuizzes, getQuiz, updateQuiz, deleteQuiz} = require('../Controllers/quizes/quiz')

quizRouter.post('/add', createQuiz);
quizRouter.get('/', getQuizzes);
quizRouter.get('/:id',getQuiz);
quizRouter.put('update/:id', updateQuiz)
quizRouter.delete('delete/:id', deleteQuiz);


module.exports = quizRouter;