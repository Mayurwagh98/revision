const Task = require("../models/task.model")
const {ErrorHandler, errorMiddleware} = require("../middlewares/error")

const getTasks = async(req, res) =>{

    try{
        let tasks = await Task.find()

        return res.status(200).json({
            status: true,
            tasks
        })
    }
    catch(error){
       next(error)
    }
}

const createTask = async(req, res, next) =>{

    let {title, description} = req.body

    let task = await Task.findOne({title})

    try {
        if(task) return next(new ErrorHandler("Task Already Exists"))

        task = await Task.create({title, description,user: req.user,})

        return res.status(201).json({
            status: true,
            message: "Task added Successfully"
        })
    } catch (error) {
      next(error)
    }
}

let updateTask = async(req, res, next) =>{

    let {id} = req.params

    let task = await Task.findById(id)
    try {
        
        if(!task) return next(new ErrorHandler("Task Doesn't Exists", 404))

        task.completed = !task.completed
        await task.save()

        return res.status(200).json({
            status:true,
            message: "Task Updated"
        })

    } catch (error) {
      next(error)
    }
    
}

let deleteTask = async(req, res, next) =>{

    let {id} = req.params

    let task = await Task.findById(id)

    try {
        if(!task) return next(new ErrorHandler("Task Doesn't Exists", 404))

        await task.deleteOne()

        return res.status(200).json({
            status: true,
            message: "Task Deleted Successfully"
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {getTasks, createTask, updateTask, deleteTask}