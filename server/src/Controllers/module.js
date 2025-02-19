const express = require("express");
const modules = require("../Models/ModuleSchema");
const courses = require("../Models/CourseModel");


async function getModule(req, res){

    try{
        const {courseId} = req.params;
       const moduleData = await modules.find({course: courseId}).populate('lesson')
      
       
       if(!moduleData || moduleData.length === 0){
        return res.status(404).json({ message: "No modules found"})
       }

       res.status(200).json(moduleData)
    }catch (error){
        console.error("Error retrieving the module: " , error) 
        res.status(500).json({message: 'Internal server error'})
    }
}
async function addModule(req, res) {
    try {
        
        const { title, courseId, lessons } = req.body;

        console.log("courseID: ", courseId, "title: ", title)
        // Validate that the required fields are present
        if (!title || !courseId) {
            return res.status(400).json({ message: "Title and Course ID are required" });
        }

        // Check if the course exists in the database
        const course = await courses.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Create a new module and associate it with the course
        const newModule = new modules({
            title,
            course: courseId, // Ensure you're passing the courseId as a reference
            lessons: lessons || []  // Handle lessons (optional)
        });

        // Save the new module to the database
        await newModule.save();

        // Respond with the newly created module
        return res.status(201).json(newModule);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
}


// update Content
async function updateModule(req, res) {
    try {
        const { moduleId } = req.params;
        const { title } = req.body;

        // Find and update the module
        const updatedModule = await Module.findByIdAndUpdate(
            moduleId,
            { title },
            { new: true, runValidators: true }
        );

        if (!updatedModule) {
            return res.status(404).json({ message: "Module not found" });
        }

        res.status(200).json({ message: "Module updated successfully", module: updatedModule });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

async function deleteModule(req, res){
    try {
        const { moduleId } = req.params;

        // Find and delete the module
        const deletedModule = await Module.findByIdAndDelete(moduleId);

        if (!deletedModule) {
            return res.status(404).json({ message: "Module not found" });
        }

        // Optionally, remove the module from the course's modules array
        await Course.findByIdAndUpdate(deletedModule.course, {
            $pull: { modules: moduleId }
        });

        res.status(200).json({ message: "Module deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = { addModule, updateModule, getModule, deleteModule}