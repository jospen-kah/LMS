const express = require('express');
const {addModule, updateModule, getModule, deleteModule} = require('../Controllers/module');


const modRouter = express.Router();

modRouter.get('/:courseId', getModule)
modRouter.post('/add', addModule);
modRouter.put('/update/:id', updateModule);
modRouter.delete('/delete/:id',deleteModule )

module.exports = modRouter;