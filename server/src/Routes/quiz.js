const express  = require('express');
const quizRouter = express.Router()
const {addQuiz} = require('../Controllers/quizes/quiz')

quizRouter.post('/add', addQuiz);
// quizRouter.get('/', allQuizzes),
// quizRouter.get('/:id', singleQuiz);
// quizRouter.put('/:id', updateQuiz);
// quizRouter.delete('/:id', deleteQuiz)


module.exports = quizRouter;