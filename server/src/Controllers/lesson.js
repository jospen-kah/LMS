const Lesson = require('../Models/LessonSchema');
const Module = require('../Models/ModuleSchema');

async function createLesson(req, res) {
    try {
        const { title, content, moduleId, video } = req.body;
        console.log("moduleId", moduleId)
        // Check if the module exists
        const module = await Module.findById(moduleId);
        console.log("module: ", moduleId)
        if (!module) {
            return res.status(404).json({ message: "Module not found" });
        }

        // Create the lesson
        const lesson = new Lesson({ title, content, module: moduleId, video });
        await lesson.save();

        // Add lesson to module
        module.lessons.push(lesson._id);
        await module.save();

        res.status(201).json({ message: "Lesson created successfully", lesson });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

// Get lessons by module
async function getLessons(req, res) {
    try {
        const { moduleId } = req.params; // Extract module ID from request params
        if (!moduleId) {
            return res.status(400).json({ message: "Module ID is required" });
        }

        const lessons = await Lesson.find({ module: moduleId }).populate('module', 'title');
        
        if (!lessons.length) {
            return res.status(404).json({ message: "No lessons found for this module" });
        }

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
            { title, content, video },
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