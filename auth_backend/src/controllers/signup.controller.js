
const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const SECRET_KEY = "blahblah"

const signup = async(req, res) =>{

    const {email, password, name} = req.body
    try {
        const userExists = await User.findOne({email: email})

        if(userExists){
            res.status(400).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 8)

        const newUser = await User.create({
            email: email,
            name: name,
            password: hashedPassword
        })

        const token = jwt.sign({email: newUser.emai, id: newUser.id}, SECRET_KEY)

        res.status(201).json({user: newUser, token: token})


    } catch (error) {
        res.status(404).json({message: error.message})
    }
    

}

module.exports = signup
