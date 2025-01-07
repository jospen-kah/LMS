const express = require('express');
const courses = require('../../Models/CourseModel');
const mongoose = require('mongoose')

async function deleteCourse(req, res){
    try{
        const courseId = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(courseId)){
            return res.status(400).json({message: 'Invalid course Id format '})
        }
        
        const deletedCourse = await courses.findByIdAndDelete(new mongoose.Types.ObjectId(courseId));
        
        if (deletedCourse) {
            res.status(200).json({ message: 'Course deleted successfully', deletedCourse });
        } else {
            res.status(404).json({ message: `No course found with id ${courseId}` });
        }
    
        
    }
    catch (error){
        console.error('Error deleting course', error)
        res.status(500).json({ message : "Internal Server error"})
    }
}

module.exports = { deleteCourse}