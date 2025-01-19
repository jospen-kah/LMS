const express = require('express');
const { addCoursesController, viewAllCoursesController, viewSingleCourse, deleteCourse, updateCourse} = require('../Controllers/courses/course_management');

const router = express.Router();


router.post('/add', addCoursesController);
router.get('/', viewAllCoursesController);
router.get('/:id', viewSingleCourse);
router.delete('/delete/:id', deleteCourse);
router.put('/update/:id', updateCourse)


module.exports = router;
