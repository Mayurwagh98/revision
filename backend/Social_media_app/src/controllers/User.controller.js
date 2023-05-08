const User = require("../models/User.model")

let getUsers = async(req, res) =>{

    try {
        
        let users = await User.find()
        
        return res.status(200).send(users)


    } catch (error) {
        return res.status(500).send({message: error.message})
    }

    
}

module.exports = {getUsers}