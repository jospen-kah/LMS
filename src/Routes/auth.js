const express = require("express");
const { authLoginController, authRegisterController, checkRole } = require("../Controllers/auths/auth");


const authRouter = express.Router();
authRouter.use(express.json());

// Public routes
authRouter.post("/register", authRegisterController);
authRouter.post("/login", authLoginController);

// Protected admin-only route
authRouter.get("/admin-dashboard", async (req, res, next) => {
    try {    
      await checkRole("admin")(req, res, next);
      res.status(200).send("Welcome to the admin dashboard!");
    } catch (err) {
      next(err); 
    }
  });


authRouter.use((err, req, res, next) => {
  if (err.status === 403) {
    res.status(403).json({ message: "Permission denied. Admins only." });
  } else {
    next(err);
  }
});

module.exports = authRouter;
