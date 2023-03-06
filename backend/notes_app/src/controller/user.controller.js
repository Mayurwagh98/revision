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

        const newUser = await User.create({name, email, password: hashedPassword, age})

        const token = jwt.sign({email: newUser.email}, "hash")

        res.status(200).json({newUser,token, message:"Sign up success"})


    } catch (error) {
        res.status(500).json({message: error.message})
    }


}


const loginUser = async(req, res) =>{

    
        let userExists = await User.findOne({email: req.body.email})
        console.log(userExists)

    try {

        if(!userExists){
            res.status(400).json({message: "User doesn't exists"})
        }

        const matchedPass = await bcrypt.compare(req.body.password, userExists.password)

        if(!matchedPass){
            res.status(400).json({message: "Wrong Credentials"})
        }
        
        const token = jwt.sign({email: userExists.email}, "hash")
        
        // seding user data, except password
        const {password, ...remainingDetails} = userExists._doc
        
        res.status(200).json({...remainingDetails, token: token})

    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

module.exports = {signupUser, loginUser}