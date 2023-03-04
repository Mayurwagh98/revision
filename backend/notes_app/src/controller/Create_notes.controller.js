const Notes = require("../models/notes.models")

let createNotes = async(req, res) =>{

    try {
        
        const newNote = await Notes.create(req.body)

        await newNote.save()

        res.status(200).json({message: "Note Created"})

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = createNotes