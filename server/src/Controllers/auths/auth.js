const User = require('../../Models/UserModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const key = process.env.KEY

async function authRegisterController(req, res){

   try {
       const { username, email, password, role, course } = await req.body;
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
        course,
    });
       // await newUser.save();

       res.status(201).json({ message: "User registered successfully!"});
   }
   catch (error) {
       console.error("Error", error)
       res.status(500).json({ message: "Something went wrong", error })
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
            { id: user._id, email: user.email, role: user.role, course: user.course },
            key,
            { expiresIn: "1h" }

        );
        // console.log(key ,"hello",token)

        res.status(200).json({
            message: "Login Successful",
            token,
            course: user.course,
        });

    }
    catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err.message })
    }


}


async function checkRole(req, res ) {

    try {
      const { role } = await req.query;
      const user = await User.findOne({ role });

      if (!user) return res.status(404).json({ message: "User not found" });
      if (user.role !== "admin") return res.status(403).json({ message: "Access denied. Admins only." });
      else res.status(200).json({ message: "Welcome to admin dashboard!"})
    
    } catch (err) {
      res.status(500).json({ message: "An error occurred", error: err.message });
    }
  };


  

module.exports = {authRegisterController, authLoginController, checkRole}