const express = require("express");
const { authAdminRegisterController} = require("../Controllers/auths/adminauth");
const { authLoginController, authRegisterController, updateStudentEnrollment} = require("../Controllers/auths/auth");


const authRouter = express.Router();
authRouter.use(express.json());


authRouter.post("/register/admin", authAdminRegisterController);
authRouter.post("/register/user", authRegisterController);
authRouter.post("/login", authLoginController);
authRouter.put("/update-enroll/:id", updateStudentEnrollment);


module.exports = authRouter;
