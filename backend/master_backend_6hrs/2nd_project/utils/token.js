const jwt = require("jsonwebtoken")


const sendToken = (res, message, statusCode, user) =>{

    let token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

    return res.status(statusCode).cookie("token", token).json({
        status:true,
        message
    })
}

module.exports = sendToken