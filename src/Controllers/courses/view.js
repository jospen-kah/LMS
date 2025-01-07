const express = require("express");
const courses = require("../../Models/CourseModel");
const mongoose = require("mongoose");

async function viewAllCoursesController(req, res){
  try{
    const courseData =await courses.find();
        res.status(200).json(courseData)
  }  
  catch (error){
    console.error("Error retrieving courses:", error);
    res.status(500).json({ message: 'Internal Server error'})
  }
}

module.exports = {viewAllCoursesController}