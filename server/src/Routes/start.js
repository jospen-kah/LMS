const express = require('express');
const { startCourse } = require('../Controllers/start');
const startRouter = express.Router();
startRouter.use(express.json());

startRouter.post("/", startCourse);

module.exports = startRouter;