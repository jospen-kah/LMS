const express = require("express");
const courses = require("../../Models/CourseModel");
const mongoose = require("mongoose");

async function addCoursesController(req, res){
    
        const{ course_name, course_code }= await req.body;
        if(!course_name || !course_code){
            return res.status(400).json({ message: ' course_name and course_code  are required.' });
        }

        
    try{
        // create a new course document and save it
        const newCourse = new courses({
            course_name,
            course_code
        });
  
    await newCourse.save();
    res.status(201).json( {
        message: "Course successfully created",
        course: newCourse
    });
}
catch (error){
    console.error("Error creating course: ", error);
    res.status(500).json({message: "internal Server error"});
}
}

module.exports = {addCoursesController}