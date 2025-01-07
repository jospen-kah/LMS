const express = require('express');
const { addCoursesController } = require('../Controllers/courses/add');
const { viewAllCoursesController } = require("../Controllers/courses/view");
const {viewSingleCourse} = require("../Controllers/courses/single");
const {deleteCourse} = require("../Controllers/courses/delete");
const {updateCourse} = require("../Controllers/courses/update");
const router = express.Router();

// Define the POST route for adding courses
router.post('/add', addCoursesController);
router.get('/', viewAllCoursesController);
router.get('/:id', viewSingleCourse);
router.delete('/delete/:id', deleteCourse);
router.put('/update/:id', updateCourse)


module.exports = router;
