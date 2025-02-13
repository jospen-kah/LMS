const express = require('express');
const { userPortal } = require('../Controllers/portal');

const portalRouter = express.Router();
portalRouter.use(express.json());

portalRouter.get("/:id", userPortal);

module.exports = portalRouter;