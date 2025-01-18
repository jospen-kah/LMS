const User = require('../../Models/UserModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const Admin =require('../../Models/AdminSchema')
const key = process.env.KEY


async function authAdminRegisterController(req, res){

    try {
        const { username, email, password} = await req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exist" })
 
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
 
        
        const newAdmin = new Admin({ 
         username, 
         email, 
         password: hashedPassword,
         
     });
        await newAdmin.save();
        res.status(201).json({ message: "User registered successfully!"});
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Something went wrong", error })
    }
 }


 module.exports = {authAdminRegisterController}