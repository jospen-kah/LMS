const Lesson = require('../Models/LessonSchema');
const Module = require('../Models/ModuleSchema');

async function createLesson(req, res) {
    try {
        const { title, content, moduleId } = req.body;
        console.log("moduleId", moduleId)
        // Check if the module exists
        const module = await Module.findById(moduleId);
        console.log("module: ", module)
        if (!module) {
            return res.status(404).json({ message: "Module not found" });
        }

        // Create the lesson
        const lesson = new Lesson({ title, content, module: moduleId });
        await lesson.save();

        // Add lesson to module
        module.lessons.push(lesson._id);
        await module.save();

        res.status(201).json({ message: "Lesson created successfully", lesson });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

//get all lessons
async function getLessons(req, res) {
    try {
        const lessons = await Lesson.find().populate('module', 'title');
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}



//get a single lesson
async function getLesson(req, res) {
    try {
        const { lessonId } = req.params;
        const lesson = await Lesson.findById(lessonId).populate('module', 'title');

        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }

        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }

    
}


//update a lesson
async function updateLesson(req, res) {
    try {
        const { lessonId } = req.params;
        const { title, content } = req.body;

        const updatedLesson = await Lesson.findByIdAndUpdate(
            lessonId,
            { title, content },
            { new: true, runValidators: true }
        );

        if (!updatedLesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }

        res.status(200).json({ message: "Lesson updated successfully", lesson: updatedLesson });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}




module.exports = {createLesson, getLessons, getLesson, updateLesson}