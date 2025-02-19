const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the course schema
const courseSchema = new Schema({
    course_name: { type: String, required: true },
    course_title: { type: String, required: true },
    course_description: { type: String, required: true },
    course_image: { type: String, required: true }, 
    category: { type: String, required: false }, 
    modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }] // Reference to Modules
}, { timestamps: true });
    

module.exports = mongoose.model("Course", courseSchema);
