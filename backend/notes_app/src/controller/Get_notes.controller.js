const Notes = require("../models/notes.models")

let getNotes = async(req, res) =>{

    const notes = await Notes.find()

    res.send(notes)
}

module.exports = getNotes