const User = require("../models/users.model")
const sendToken = require("../utils/token")
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

        sendToken(res, "Registered Successfully", 201, user)

    }
    catch(error){
        return res.status(500).json({
            status:false,
            message: error.message
        })
    }
}

module.exports = {register}