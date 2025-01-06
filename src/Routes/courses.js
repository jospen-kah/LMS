const express = require('express');
const { addCoursesController } = require("../Controllers/courses/add");
const router = express.Router();

// Define the POST route for adding courses
router.post('/add', addCoursesController);


module.exports = router;