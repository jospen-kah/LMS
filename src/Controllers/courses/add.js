const express = require("express");
const courses = require("../../Models/CourseModel");
const mongoose = require("mongoose");

async function addCoursesController(req, res){
    
        const{ course_code, course_name }= await req.body;
        if(!course_code || course_name){
            return res.status(400).json({message: 'Internal Server error'});
        }

        
    try{
        // create a new course document and save it
        const newCourse = new courses({
            course_code,
            course_name,
        });
  
    await newCourse.save();
    res.status(201).json(newCourse, {message: "Course successfully created"});
}
catch (error){
    console.error("Error creating course: ", error);
    res.status(500).json({message: "internal Server error"});
}
}

module.exports = {addCoursesController}