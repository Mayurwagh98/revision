const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    completed:{
      type:Boolean,
      default: false  
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt:{
        type: Date,
        defalut: Date.now
    }
})

module.exports = mongoose.model("Task", TaskSchema)