const jwt = require("jsonwebtoken")

const authorization = async(req, res) =>{
    
    const token = req.headers.authorization.split(" ")[1]

    try {
        
        if(token){

            const decoded = jwt.verify(token, "blah")
            if(decoded){

                const userID = decoded.userID
    
                req.body.userID = userID

                next()
            }
            else{
                res.send("You need to login")
            }
        }
        else{
            res.status(400).send({message: "You need to login"})
        }


    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = authorization