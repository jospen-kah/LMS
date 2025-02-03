const User = require('../../Models/UserModel');
const Course = require('../../Models/CourseModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const Student = require('../../Models/StudentSchema');

const key = process.env.KEY

async function authRegisterController(req, res) {

    try {
        const { username, email, password } = await req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exist" })

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)


        const newStudent = new Student({
            username,
            email,
            password: hashedPassword,

        });
        await newStudent.save();
        res.status(201).json({ message: "User registered successfully!" });
    }
    catch (error) {
        console.error("Error", error)
        res.status(500).json({ message: "Something went wrong", error })
    }
}




async function authLoginController(req, res) {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" }); // ✅ Use return to stop execution
        }

        // Compare Passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" }); // ✅ Use return to stop execution
        }

        // Generate Token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            key,
            { expiresIn: "1h" }
        );

        // ✅ Corrected: Ensure properties are accessed on `user` not `User`
        const responseData = {
            message: "Login Successful",
            token,
            isFirstLogin: user.isFirstLogin,  
            isEnrolled: user.isEnrolled,
            course: user.course || null, // Send course ID if enrolled
        };

        res.status(200).json(responseData); // ✅ First and only response

        // ✅ Update first login status **without affecting response**
        if (user.isFirstLogin) {
            user.isFirstLogin = false; // ✅ Fix: Modify user instance
            await user.save(); // ✅ Corrected from `User.save()`
        }
    } catch (err) {
        console.error(err);
        if (!res.headersSent) { // ✅ Fix: Check if response was already sent
            res.status(500).json({ message: "Something went wrong", error: err.message });
        }
    }
}

async function updateStudentEnrollment (req, res){
    try {
        const { userId } = req.user; // Extract user ID from authenticated user (assumed to be in JWT token)
        const { isEnrolled } = req.body;

        // Find the student
        const student = await Student.findById(userId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Update enrollment status
        student.isEnrolled = isEnrolled ?? student.isEnrolled;

        // If it's the first login, set `isFirstLogin` to false
        if (student.isFirstLogin) {
            student.isFirstLogin = false;
        }

        await student.save();

        return res.status(200).json({
            message: "Student updated successfully",
            isEnrolled: student.isEnrolled,
            isFirstLogin: student.isFirstLogin
        });

    } catch (error) {
        console.error("Error updating student:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { authRegisterController, authLoginController, updateStudentEnrollment };