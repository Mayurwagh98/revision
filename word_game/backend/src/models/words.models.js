const mongoose = require("mongoose")

const WordSchema = mongoose.Schema({
    words:[]
})

module.exports = mongoose.model("Words", WordSchema)