const express = require("express");
const {viewProgress} = require("../Controllers/progress");
const progressRouter = express.Router();

progressRouter.post('/view', viewProgress)

module.exports = progressRouter;
