const User = require('../../Models/UserModel');
const courses = require('../../Models/CourseModel');
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
            { id: user._id, 
              email: user.email,
            enrolledCourses: user.enrolledCourses,
            isFirstLogin: user.isFirstLogin
            },
            key,
            { expiresIn: "1h" }
        );


        res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
                enrolledCourses: user.enrolledCourses,  // Add enrolled courses if needed
            }}); 

        // Update first login status **without affecting response**
        if (user.isFirstLogin) {
            user.isFirstLogin = false; 
            await user.save(); 
        }
    } catch (err) {
        console.error(err);
        if (!res.headersSent) { // ✅ Fix: Check if response was already sent
            res.status(500).json({ message: "Something went wrong", error: err.message });
        }
    }
}

async function updateStudentEnrollment(req, res) {
    try {
        const { id: userId } = req.params;  // Student ID from URL params
        const { courseId } = req.body;  // Course ID from request body

        // Find the course by ID
        const course = await courses.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Find the student and populate enrolledCourses
        const student = await Student.findById(userId).populate('enrolledCourses');  
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        
        const isEnrolled = student.enrolledCourses.some(
            (enrolledCourse) => enrolledCourse._id.toString() === courseId
        );

        // if (student.enrolledCourses.includes(courseId)) {
        //     return res.status(409).json({ message: "Student already enrolled in this course" });
        // }

        
        student.enrolledCourses.push(courseId);

        
        // if (!course.studentsEnrolled.includes(userId)) {
        //     course.studentsEnrolled.push(userId);
        // }

        // Set first login flag if needed
        if (student.isFirstLogin) {
            student.isFirstLogin = false;
        }

        // Save updates
        await student.save();
        await course.save();

        return res.status(200).json({
            message: "Student enrolled successfully",
            enrolledCourses: student.enrolledCourses,
            studentsEnrolled: course.studentsEnrolled, // Return updated students array
            isFirstLogin: student.isFirstLogin
        });

    } catch (error) {
        console.error("Error updating student enrollment:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}





module.exports = { authRegisterController, authLoginController, updateStudentEnrollment };