const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) =>{
    // getting token from heders and splitting it because,
    // we pass token like  --> Bearer "whatever token user has"
    // so we only need token not Bearer string, so asccess token which is present on
    // index 1
    const token = req.headers?.auth?.split(" ")[1] 

    if(token){
        const decoded = jwt.verify(token, "hash")

        if(decoded){
            // const userID = decoded.userID
            // req.body.userID = userID
            next()
        }
        else{
            res.send("You need to login")
        }

    }
    else{
        res.send("You need to login")
    }
}

module.exports = authenticate