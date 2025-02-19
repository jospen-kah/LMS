const User = require('../Models/UserModel')
const Course = require('../Models/CourseModel');
const Student = require('../Models/StudentSchema');


async function startCourse(req, res) {
    try {
        const { courseId } = req.body;
        const userId = req.params.id;


        const user = await User.findById(userId);
        if(!user) return res.status(404).json({message: "User not found"});

        const course = await Course.findById(courseId);
        if(!course) return res.status(404).json({ message: "Course not Found" })

        User.enrollCourses.push(courseId);
        course.studentsEnrolled.push(userId)
        await User.save();
        await Course.save();

        res.status(200).json({ message: "Enrollment successful", courseId });
    }
    catch (error) {
        res.status(500).json({ message: "Error enrolling", error: error.message });
    }
}

module.exports = {startCourse}