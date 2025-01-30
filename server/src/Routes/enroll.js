const express = require('express');
const {enrolledCourse} = require('../Controllers/enroll');
const enrollRouter = express.Router();
enrollRouter.use(express.json());

enrollRouter.post("/enroll", enrolledCourse);

module.exports = enrollRouter;