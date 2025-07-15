const { json } = require('express')
const Task = require('../models/Models')

const getAllTask =async(req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({tasks})
    }
    
}
const createTask =async(req,res)=>{
    try {
        const task = await Task.create(req.body)

    res.status(201).json({task})
    } catch (error) {
        res.status(500).json({message :error})
    }
    
}
const getTask =async(req,res)=>{
try {
    const {id:taskID} =req.params
    const task = await Task.findOne({_id:taskID})
    res.status(202).json({task})

    if(!task) {
        res.status(500).json({message:`No task with Id: ${taskID}`})}
        res.status(201).json({task})
} catch (error) {
    res.status(500).json({message:error})
}

    
}
const updateTask =async(req,res)=>{
try {
    const {id:taskID}= req.params
    const task = await Task.findByIdAndUpdate(taskID,req.body,{new:true,runValidators:true})

    if(!task){
        res.status(404).json({message:`No task with Id: ${taskID}`})}
        res.status(201).json({task})
} catch (error) {
    res.status(500).json({message:"internal server error"})
}

    res.send('update the all task')
}
const deleteTask =async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findByIdAndDelete(taskID)
        if(!task){
            res.status(404).json({message:'Task not found' })}
        res.status(200).json({message:'task deleted succesfully'})
    } catch (error) {
        res.status(500).json({message:error})
    }
    
}

    const editTask=async (req,res)=>{
        try {
            const {id:taskID}=req.params
            const task = await Task.findByIdAndUpdate({taskID},req.body,{
                new:true,
                runValidators:true,
                overwrite:true
            })
            if(!task)
            {
                res.status(404).json({message:'No task with the id'})
            }
            res.status(200).json({task})
            
        } catch (error) {
            res.status(500).json({message:error})
        }
    } 


module.exports ={
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask
}