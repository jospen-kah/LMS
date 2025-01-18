const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProgressSchema = new Schema({
    studentID: { type: Schema.Type.ObjectId, ref: 'User', required: true},
    courseID: { type: Schema.Type.ObjectId, ref: 'Course', required: true}
});

module.exports = mongoose.model('Progress', ProgressSchema);