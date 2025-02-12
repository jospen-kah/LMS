const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the course schema
const courseSchema = new Schema({
    course_name: { type: String, required: true },
    course_title: { type: String, required: true },
    course_description: { type: String, required: true },
    course_image: { type: String, required: true }, 
    category: { type: String, required: true }, 
    
    studentsEnrolled: [{ type: Schema.Types.ObjectId, ref: 'Student' }], 
    
})

// Export the model
module.exports = mongoose.model("Course", courseSchema);
