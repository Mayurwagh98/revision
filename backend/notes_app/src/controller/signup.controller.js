const User = require("../models/user.models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const signupUser = async(req, res) =>{

    let {name, email, password, age} = req.body

    try {
        
        let user = await User.findOne({email})
        
        if(user){

            res.status(400).json({message: "User already exists"})
        }
        
        const hashedPassword = await bcrypt.hash(password, 8)

        const newUser = await User.create({name, email, hashedPassword, age})

        const token = jwt.sign({email: newUser.email}, "hash")

        res.status(200).json({newUser,token,message:"Sign up success"})


    } catch (error) {
        res.status(500).json({message: error.message})
    }


}

module.exports = signupUser