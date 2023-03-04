const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:"",
    email:"",
    password:"",
    age:""
})

module.exports = mongoose.model("User", userSchema)