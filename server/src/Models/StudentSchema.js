// StudentModel.js
const mongoose = require('mongoose');
const User = require('./UserModel'); 
const { Schema } = mongoose;

const StudentSchema = new Schema({
    isFirstLogin: { type: Boolean, default: true},
    isEnrolled: {type: Boolean, default: false},

});

const Student = User.discriminator('Student', StudentSchema);

module.exports = Student;