const Users = require("../models/User.model")
const bcrypt = require("bcrypt")

let getUsers = async(req, res) =>{

    try {
        
        let users = await Users.find()
        
        return res.status(200).send(users)

    } catch (error) {
        return res.status(500).send({message: error.message})
    }
    
}

let createUser = async(req, res) =>{
    
    let {name, email, password} = req.body

    let exsistingUser = await Users.findOne({email})

    try{

        if(exsistingUser){
            return res.status(404).send({message: "User already exists!"})
        }
        const hashPassword = await bcrypt.hash(password, 8)

        let newUser = await Users.create({name, email, password: hashPassword})

        return res.status(201).send({message:"User created", newUser})
        
    }
    catch(error){
        return res.status(500).send({message:error.message})
    }
}

module.exports = {getUsers, createUser}