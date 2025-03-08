const express  = require('express');
const quizRouter = express.Router()
const {createQuiz, getQuizzes, getQuiz, updateQuiz, deleteQuiz} = require('../Controllers/quizes/quiz')

quizRouter.post('/add/:id', createQuiz);
quizRouter.get('/', getQuizzes);
quizRouter.get('/:moduleId',getQuiz);
quizRouter.put('update/:id', updateQuiz)
quizRouter.delete('delete/:id', deleteQuiz);


module.exports = quizRouter;