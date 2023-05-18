const User = require("../models/users.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

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

        let token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

        return res.status(201).cookie("token", token).json({
            status:true,
            message:"Registered Successfully"
        })

    }
    catch(error){
        return res.status(500).json({
            status:false,
            message: error.message
        })
    }
}

module.exports = {register}