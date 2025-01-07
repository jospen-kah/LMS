const User = require('../../Models/UserModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const key = process.env.KEY

async function authRegisterController(req, res){

   try {
       const { username, email, password, role } = await req.body;
       const existingUser = await User.findOne({ email });
       if (existingUser) return res.status(400).json({ message: "User already exist" })

       // Hash the password
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt)

       //Create the user
       const newUser = User.create({ 
        username, 
        email, 
        password: hashedPassword,
        role: role || "student",
    });
       // await newUser.save();

       res.status(201).json({ message: "User registered successfully!"});
   }
   catch (err) {
       res.status(500).json({ message: "Something went wrong" })
   }
}

async function authLoginController(req, res){
    try {
        const { email, password } = req.body;

        //find user
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        //compare Passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            key,
            { expiresIn: "1h" }

        );
        console.log(key, token)

        res.status(200).json({
            message: "Login Successful",
            token,
        });

    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err.message })
    }


}

async function checkRole(requiredRole) {
    return (req, res, next) => {
      const token = req.header("Authorization")?.split(" ")[1]; // Extract token from "Bearer <token>"
      if (!token) return res.status(401).json({ message: "Access denied. No token provided." });
  
      try {
        const decoded = jwt.verify(token, key);
        req.user = decoded;
  
        // Check user role
        if (req.user.role !== requiredRole) {
          return res.status(403).json({ message: "Permission denied. Insufficient role." });
        }
  
        next();
      } catch (err) {
        res.status(400).json({ message: "Invalid token." });
      }
    };
  }
  

module.exports = {authRegisterController, authLoginController, checkRole}