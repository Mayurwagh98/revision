const User = require("../models/users.model")
const sendToken = require("../utils/token")
const bcrypt = require("bcrypt")

// user auth
let register = async(req, res) =>{
    
    let {name, email, password} = req.body

    let user = await User.findOne({email})

    try{
        if(user){
            return res.status(400).json({
                status:false,
                message:"User Already Registered"
            })
        }

        let hashedPassword = await bcrypt.hash(password, 10)

        user = await User.create({name, email, password: hashedPassword})

        sendToken(res, "Registered Successfully", 201, user)

    }
    catch(error){
        return res.status(500).json({
            status:false,
            message: error.message
        })
    }
}

let login = async(req, res) =>{

    let {email, password} = req.body
//using select because in the schema I have kept select: false, so I can't access password without using select
    let user = await User.findOne({email}).select("+password") 

    try{
        if(!user){
            return res.status(404).send({
                status:false,
                message: "Invalid Credentials"
            })
        }   

        let matchedPassword = await bcrypt.compare(password, user.password)

        if(!matchedPassword){
            return res.status(400).send({
                status: false,
                message: "Invalid Credentials"
            })
        }

        sendToken(res, `Welcome ${user.name}`, 200, user)
    }
    catch(error){
        return res.status(500).send({
            status: false,
            message: error.message
        })
    }

}

let getUsers = async(req, res) =>{

    try{
        let users = await User.find()

        return res.status(200).json({
            status: true,
            users
        })
    }
    catch(error){
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

let getMyDetails = async(req, res) =>{

    return res.status(200).json({
        status: true,
        user: req.user
    })
}

let logout = async(req,res) =>{

    res.status(200).cookie("token",null,{expires:new Date(Date.now())}).json({
        status:true,
        message: "Logged Out"
    })
}

module.exports = {register, login, getUsers, getMyDetails, logout}