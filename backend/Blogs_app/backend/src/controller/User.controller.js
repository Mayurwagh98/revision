const bcrypt = require("bcrypt")
const User = require("../models/User.model")
const jwt = require("jsonwebtoken")


let Signup = async(req, res) =>{
    
    let {name, email, password} = req.body

    let user = await User.findOne({email})
    try {
        
        if(user){
    
            res.status(200).send({message: "User already exists"})
        }
    
        const hashPassword = await bcrypt.hash(password, 8)
    
        const newUser = await User.create({name, email, password: hashPassword})
    
        const token = jwt.sign({email: newUser.email}, 'blah')
    
        res.status(200).send({message: "User registered", user: newUser})
    } catch (error) {
        console.log(error.message)   
    }

}

module.exports = {Signup}