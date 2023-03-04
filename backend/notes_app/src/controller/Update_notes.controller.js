const Notes = require("../models/notes.models")

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

module.exports = updateNotes