const express = require("express");
const { authLoginController, authRegisterController, checkRole } = require("../Controllers/auths/auth");
const authenticate = require('../middleware/role.js');

const authRouter = express.Router();
authRouter.use(express.json());

// Public routes
authRouter.post("/register", authRegisterController);
authRouter.post("/login", authLoginController);

// Protected admin-only route
authRouter.get("/admin",  checkRole)
    

module.exports = authRouter;
