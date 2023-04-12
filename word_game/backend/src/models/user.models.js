const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name : String,
    difficulty : String
})

module.exports = mongoose.model("User", UserSchema)