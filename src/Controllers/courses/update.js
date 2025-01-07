const express = require('express');
const courses = require('../../Models/CourseModel');
const mongoose = require('mongoose');

async function updateCourse(req, res) {

    try {
        const courseId = req.params.id;
        const updatedCourseData = req.body;

         // Validate courseId as an ObjectId
         if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({ message: 'Invalid course ID format' });
        }

        const updatedCourse = await courses.findByIdAndUpdate(
            new mongoose.Types.ObjectId(courseId),
            updatedCourseData,
            { new: true }  // Return the updated document
           
        );
        
        if (updatedCourse) {
            return res.status(200).json({ message: 'Course updated successfully', updatedCourse });
        } else {
            return res.status(404).json({ message: `No course found with id ${courseId}` });
        }
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Internal server error' });
    }


}
module.exports = { updateCourse}