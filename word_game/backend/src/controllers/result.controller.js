const Result = require("../models/result.models")

const getResults = async(req, res) =>{

    try {
        const results = await Result.find()

        return res.status(200).send(results)
    } catch (error) {
        return res.status(500).send({message:error.message})        
    }
}

const createResults = async(req, res) =>{

    let {name} = req.body
    const existingResult = await Result.findOne({name})

    try {
        if(!existingResult){
            const result = await Result.create(req.body)

            return res.status(201).send({message:"Result saved", result})
        }
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
}

const deleteResult = async(req, res) =>{
    
    let resultId = req.params.id
    let existingResult = await Result.findById({_id: resultId})
    
    try {
        if(!existingResult){
            return res.status(404).send({message:"result not found"})
        }

        const deleteRes = await Result.findByIdAndDelete({_id:resultId})

        return res.status(200).send({message:"Result deleted"})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

module.exports = {getResults, createResults, deleteResult}