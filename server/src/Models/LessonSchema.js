const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true }, // Reference to Module
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' } // Reference to Quiz (Optional)
}, { timestamps: true });

module.exports = mongoose.model('Lesson', LessonSchema);
