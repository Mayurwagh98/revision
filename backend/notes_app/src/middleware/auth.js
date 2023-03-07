const jwt = require("jsonwebtoken")

const authorize = (req, res, next) =>{
    // getting token from heders and splitting it because,
    // we pass token like  --> Bearer "whatever token user has"
    // so we only need token not Bearer string, so asccess token which is present on
    // index 1
    const token = req.headers?.authorization?.split(" ")[1] 
    try {
        if(token){
            const decoded = jwt.verify(token, "hash")
    
            // console.log(decoded)

            if(decoded){
    
                const userID = decoded.userID // getting the user id from the token
    
                // adding the users user id in the body, 
                // so that everytime user creates a post he doesn't need to pass his/her user id manually
                req.body.userID = userID 
    
                next()
            }
            else{
                res.send("You need to login")
            }
    
        }
        else{
            res.send("You need to login")
        }    
    } catch (error) {
        res.status(500).send(error.message)
    }
   

    
    
}

module.exports = authorize