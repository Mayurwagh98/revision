const { ErrorHandler } = require("../middlewares/error")
const User = require("../models/users.model")
const sendToken = require("../utils/token")
const bcrypt = require("bcrypt")

// user auth
let register = async(req, res, next) =>{
    
    let {name, email, password} = req.body

    let user = await User.findOne({email})

    try{
        if(user) return next(new ErrorHandler("User Already Registered", 400))

        let hashedPassword = await bcrypt.hash(password, 10)

        user = await User.create({name, email, password: hashedPassword})

        sendToken(res, "Registered Successfully", 201, user)

    }
    catch(error){
       next(error)
    }
}

let login = async(req, res, next) =>{

    let {email, password} = req.body
//using select because in the schema I have kept select: false, so I can't access password without using select
    let user = await User.findOne({email}).select("+password") 

    try{
        if(!user) return next(new ErrorHandler("Invalid Credentials", 400))

        let matchedPassword = await bcrypt.compare(password, user.password)

        if(!matchedPassword) return next(new ErrorHandler("Invalid Credentials", 400))

        sendToken(res, `Welcome ${user.name}`, 200, user)
    }
    catch(error){
     next(error)
    }

}

let getUsers = async(req, res, next) =>{

    try{
        let users = await User.find()

        return res.status(200).json({
            status: true,
            users
        })
    }
    catch(error){
       next(error)
    }

}

let getMyDetails = async(req, res, next) =>{

    try {
        return res.status(200).json({
            status: true,
            user: req.user
        })
    } catch (error) {
        next(error)
    }
}

let logout = (req,res) =>{

    return res.status(200).cookie("token",null,{expires:new Date(Date.now())}).json({
        status:true,
        // user:req.user,
        message: "Logged Out"
    })
}

module.exports = {register, login, getUsers, getMyDetails, logout}