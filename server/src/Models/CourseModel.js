const mongoose = require("mongoose");
const {Schema} = mongoose;

//Define the courses schema and model
const courseSchema = new Schema({
    course_name: { type: String, required: true},
    course_title: { type: String, required: true},
    course_description: {type: String, required: true},
    module: [{ type: Schema.Types.ObjectId, ref: 'Module'}]
});


module.exports = mongoose.model("Course",courseSchema)