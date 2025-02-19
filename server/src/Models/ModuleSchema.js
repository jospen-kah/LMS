const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, // Reference to Course
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }] // Reference to Lessons
}, { timestamps: true });

module.exports = mongoose.model('Module', ModuleSchema);
