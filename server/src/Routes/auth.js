const express = require("express");
const { authAdminRegisterController} = require("../Controllers/auths/adminauth");
const { authLoginController, authRegisterController, enrolledCourse} = require("../Controllers/auths/auth");


const authRouter = express.Router();
authRouter.use(express.json());


authRouter.post("/register/admin", authAdminRegisterController);
authRouter.post("/register/user", authRegisterController);
authRouter.post("/login", authLoginController);


module.exports = authRouter;
