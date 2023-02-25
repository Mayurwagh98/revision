const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const SECRET_KEY = "blahblah"

const signin = async(req, res) =>{

    const {email, password} = req.body

    try {
        
        const existingUser = await User.findOne({email: email})

        if(!existingUser){
            res.status(404).json({message: "User doesn't exists"})
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)

        if(!matchPassword){
            res.status(404).json({message: "Wrong Credentials"})
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser.id}, SECRET_KEY)

        res.status(201).json({user: existingUser, token: token})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = signin