const express = require('express');
const {addModule, UpdateModule} = require('../Controllers/module');


const modRouter = express.Router();

modRouter.post('/add', addModule);
modRouter.put('/update/:id', UpdateModule);

module.exports = modRouter;