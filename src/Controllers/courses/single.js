const express = require('express');
const mongoose = require('mongoose');
const courses = require('../../Models/CourseModel');

async function viewSingleCourse(req, res){
    try{
       const courseId = req.params.id
       const course = await courses.findById(courseId)

       if(!course) res.status(404).json({ message: `No course with the id of ${courseId} was found`})

        res.status(200).json({course})
    }
    catch (error){
        console.error('Error retrieving course', error);
        res.status(500).json({ message: 'Internal server error'})
    }
}

module.exports = {viewSingleCourse}