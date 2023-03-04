const Notes = require("../models/notes.models")

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

module.exports = deleteNote