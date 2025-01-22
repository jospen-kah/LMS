const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProgressSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true},
    completedModules: [{ type:Schema.Types.ObjectId, ref: 'Module'}] ,
    progress: { type: Number, default: 0},
    
});

module.exports = mongoose.model('Progress', ProgressSchema);

