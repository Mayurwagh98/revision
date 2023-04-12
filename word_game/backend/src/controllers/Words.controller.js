const Words = require("../models/words.models")

const wordsFunc = async(req, res) =>{

    const singleWord = await Words.find()

    res.send(singleWord)
}

const wordsPost = async(req, res) =>{

    try {
        const newWord = await Words.create(req.body)

        return res.status(200).send({message:"word added", newWord})

    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

const wordsUpdate = async(req, res) =>{

    let wordId = req.params.id
    let existingWord = await Words.findOne({wordId})
    let wordsArray = await Words.find()
    

    try {

        if(!existingWord){
            return res.status(404).send({message:"Words not found"})
        }
        else{

            let word = await Words.findByIdAndUpdate({_id:wordId},req.body,{
                new: true,
                runValidators: true,
                useFindAndModify: false
            })
            
            return res.status(200).send({message: "words updated", word})
        }

    } catch (error) {
     return res.status(404).json({message: error.message})   
    }

}

const wordsDelete = async(req, res) =>{

    let wordId = req.params.id
    let existingWord = await Words.findOne({wordId})

    try {
        if(!existingWord){
            return res.status(404).send({message: "Words not found"})
        }
        else{

            const word = await Words.findByIdAndDelete({_id:wordId})
    
            return res.status(200).send({message:"words deleted"})
        }

    } catch (error) {
     return res.status(404).json({message: error.message})      
    }
}

module.exports = {wordsFunc, wordsPost, wordsUpdate, wordsDelete}