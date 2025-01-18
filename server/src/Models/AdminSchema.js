const express = require('express');
const mongoose = require('mongoose');
const User = require('./UserModel');
const { Schema } = mongoose


const AdminSchema = new Schema({
    
});

const Admin = User.discriminator('Admin', AdminSchema);

module.exports = Admin;