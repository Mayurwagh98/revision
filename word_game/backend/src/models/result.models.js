const mongoose  = require("mongoose")

const resultSchema = mongoose.Schema({
    level:String,
    scores: String,
    name:String
})

module.exports = mongoose.model("Result", resultSchema)