const Task = require("../models/task.model")

const getTasks = async(req, res) =>{

    try{
        let tasks = await Task.find()

        return res.status(200).json({
            status: true,
            tasks
        })
    }
    catch(error){
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

const createTask = async(req, res) =>{

    let {title, description} = req.body

    let task = await Task.findOne({title})

    try {
        if(task){
            return res.status(400).json({
                status: false,
                message:"Task doesn't exsist"
            })
        }

        task = await Task.create({title, description,user: req.user,})

        return res.status(201).json({
            status: true,
            message: "Task added Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })   
    }
}

let updateTask = async(req, res) =>{

    let {id} = req.params

    let task = await Task.findById(id)

    try {
        if(!task){
            return res.status(404).json({
                status: false,
                message: "Task doesn't exists"
            })
        }

        task.completed = !task.completed
        await task.save()

        return  res.status(200).json({
            status:true,
            message: "Task Updated"
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

let deleteTask = async(req, res) =>{

    let {id} = req.params

    let task = await Task.findById(id)

    try {
        if(!task){
            return res.status(404).josn({
                status: false,
                message: "Task doesn't exists"
            })
        }

        await task.deleteOne()

        return res.status(200).json({
            status: true,
            message: "Deleted Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = {getTasks, createTask, updateTask, deleteTask}