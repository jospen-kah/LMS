const express = require("express");
const courses = require("../../Models/CourseModel");
const mongoose = require("mongoose");


// viewing all courses
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



// view a single course
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



//create New course
async function addCoursesController(req, res){
    
  const{ course_name, course_title,course_description, module }= await req.body;
  if(!course_name || !course_title){
      return res.status(400).json({ message: ' course_name and course_code  are required.' });
  }

  
try{
  // create a new course document and save it
  const newCourse = new courses({
      course_name,
      course_title,
      course_description,
      module,
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



//update course
async function updateCourse(req, res) {

  try {
      const courseId = req.params.id;
      const updatedCourseData = req.body;

       // Validate courseId as an ObjectId
       if (!mongoose.Types.ObjectId.isValid(courseId)) {
          return res.status(400).json({ message: 'Invalid course ID format' });
      }

      const updatedCourse = await courses.findByIdAndUpdate(
          courseId,
          updatedCourseData,
          { new: true }  
         
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



//delete a course
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



module.exports = {
  addCoursesController,
  viewAllCoursesController,
  viewSingleCourse,
  deleteCourse,
  updateCourse,
};