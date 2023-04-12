const User = require('../models/user.models');

const getUser = async(req, res) =>{
    try {
        const user = await User.find()

        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

const createUser = async(req, res) =>{

    let {name} = req.body

    let existingUser = await User.findOne({name})

    try {
        
        if(existingUser){
            return res.status(400).send({message:"User already exists"})
        }
        else{

            let newUser = await User.create(req.body)

            return res.status(200).send({message:"User created", newUser})
        }
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
}

const deleteUser = async(req, res) =>{

    let userId = req.params.id
    let existingUser = await User.findOne({userId})

    try {
        if(!existingUser){
            return res.status(404).send({message: "User not found"})
        }
        else{
            const user = await User.findByIdAndDelete({_id:userId})
            return res.status(200).send({message: "User deleted"})
        }
    } catch (error) {
        return res.status(500).send({message:error.message})
    }

}

module.exports = {getUser, createUser, deleteUser}