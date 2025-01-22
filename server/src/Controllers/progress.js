const express = require("express");
const Progress = require("../Models/ProgressModel");
const Course = require("../Models/CourseModel")

//view progress
async function  viewProgress(req, res) {
    const { userId, courseId, moduleId } = req.body;
    try{
        const course = await Course.findById(courseId)
         if(!course){
            return res.status(404).json({ message: "Course not found"})
        }

        let userProgress = await Progress.findOne({ userId, courseId});
        if (!userProgress){

            userProgress = new Progress({
                userId,
                courseId,
                completedModules: [],
                progress: 0,
            })
        }
        if (userProgress.completedModules.includes(moduleId)){
            return res.status(400).json({ message: "Module already completed"});
        }

        userProgress.completedModules.push(moduleId)

        //calculate progress
        const totalModules =  course.modules.length;
        const completedModules = userProgress.completedModules.length;
        userProgress.progress = (completedModules/ totalModules) * 100;

        await userProgress.save();

        res.status(200).json({
            message: "Progress updated successfully",
            progress: userProgress.progress,
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
module.exports = {viewProgress};
