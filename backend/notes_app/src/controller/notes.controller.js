const Notes = require("../models/notes.models")

let getNotes = async(req, res) =>{

    const notes = await Notes.find()

    res.send(notes)
}

// create

let createNotes = async(req, res) =>{

    // get token from header
    // verify the token using jwt


    try {
        
        const newNote = await Notes.create(req.body)

        await newNote.save()

        res.status(200).json({message: "Note Created"})

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// update
const updateNotes = async(req,res) =>{
    
    let noteId = req.params.id
    let {title, category} = req.body


    try {
        let oldNote = await Notes.findOne({noteId})
    
        if(!noteId){
            res.status(404).json({message: "Not not found"})
        }

        await Notes.findByIdAndUpdate({_id: noteId}, req.body)
    
        res.status(200).json({message: "Not updated"})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }   

}

// delete
const deleteNote = async(req, res) =>{

    try {
        
        let noteId = req.params.id
        
        let oldNote = await Notes.findOne({noteId})
    
        if(!oldNote){
            res.status(404).json({message: "Not not found"})
        }
    
        await Notes.findByIdAndDelete({_id: noteId})
    
        res.status(200).json({message: "Note deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

module.exports = {getNotes, createNotes, updateNotes, deleteNote}