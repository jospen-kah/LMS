const express = require('express');
const { getLessons, createLesson, getLesson, updateLesson } = require('../Controllers/lesson');

const Lessonrouter = express.Router();



Lessonrouter.post('/add', createLesson);
Lessonrouter.get('/', getLessons);
Lessonrouter.get('/:id', getLesson);
Lessonrouter.put('update/:id',updateLesson)

module.exports = Lessonrouter;