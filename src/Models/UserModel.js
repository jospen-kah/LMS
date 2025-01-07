const express = require('express');
const mongoose = require("mongoose");

//Define the user schema and model
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    role:{
        type: String,
        enum: ['admin', 'student'],
        default: 'student'
    },
});

module.exports = mongoose.model("Users",UserSchema)