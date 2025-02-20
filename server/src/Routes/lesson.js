const express = require('express');
const { getLessons, createLesson, getLesson, updateLesson } = require('../Controllers/lesson');

const Lessonrouter = express.Router();



Lessonrouter.post('/add', createLesson);
Lessonrouter.get('/:moduleId', getLessons);
Lessonrouter.get('/:id', getLesson);
Lessonrouter.put('update/:id',updateLesson)

module.exports = Lessonrouter;