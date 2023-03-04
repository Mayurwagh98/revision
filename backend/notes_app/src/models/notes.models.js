const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    title: String,
    note: String,
    category: []
})

module.exports = mongoose.model("Notes", notesSchema)