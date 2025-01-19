const express = require("express");
const modules = require("../Models/ModuleSchema");
const mongoose = require("mongoose");

// add content
async function addModule(req, res){
    const {module_name, content,quiz} = await req.body;
    if(!module_name || !content){
        return res.status(400).json({
            message: "module_name or content not found"
        })
    } 
    try{
        const newModule = new modules({
            module_name,
            content,
            quiz,
        });
        await newModule.save();
        res.status(201).json({
            message: "Module Successfully Created",
            module: newModule
        })
    }
    catch(error){
        console.error("Error", error);
        res.status(500).json({message: "Internal Server error"})
    }
}

// update Content
async function UpdateModule(req, res){
    try{
        const moduleId = req.params.id;
        const updatedModuleData = req.body;

        if(!mongoose.Types.ObjectId.isValid(moduleId)){
            return res.status(400).json({ message: 'Invalid module'})
        }

        const updatedModule = await module.findByIdAndUpdate(
          moduleId,
          updatedModuleData ,
          {new: true}
        );
        if (updatedModule){
            return res.status(200).json({ message: "Module Updated Successfully"});
        }
        else{
            return res.status(404).json({ message:  `No module found with Id ${moduleId}`})
        }
    }
    catch(error){
        console.error("Error: ", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = { addModule, UpdateModule}