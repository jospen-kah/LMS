const express = require('express');
const mongoose = require("mongoose");

const ModuleSchema =new Schema({
    module_name: { type:String, required: true},
    content: { type : String, required :true},
    quiz : { type:Schema.Types.ObjectId, ref: "Quiz", required: true},

});

module.exports = mongoose.model('Module', ModuleSchema);