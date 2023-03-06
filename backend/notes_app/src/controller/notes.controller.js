const Notes = require("../models/notes.models")

let getNotes = async(req, res) =>{

    const notes = await Notes.find()

    res.send(notes)
}

// create

let createNotes = async(req, res) =>{

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
    
    // let noteId = req.params.id
    // let {title, category} = req.body

    const noteID = req.params.id // getting the note id from params
    // console.log(noteID)
    // getting the user id from the body of the note, which we passed while creating the note
    const userID = req.body.userID 

    // finding the note which was created by that specific user
    const note = await Notes.findOne({_id:noteID})
    console.log(note)

    try {
        // let oldNote = await Notes.findOne({noteID})
    
        if(userID !== note.userID){
            res.send("Not authorised")
        }

        else if(!noteID){
            res.status(404).json({message: "Not not found"})
        }
        else{

            await Notes.findByIdAndUpdate({_id: noteID}, req.body)
        
            res.status(200).json({message: "Not updated"})
        }
        
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