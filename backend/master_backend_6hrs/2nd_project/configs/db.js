const mongoose = require("mongoose")

// deprecation warning
mongoose.set("strictQuery",true)

const connectDb = () =>{
        mongoose.connect(process.env.MONGOURL,{
        dbName:"todo"
    }).then(() => {
        console.log("database connected")
    }).catch((e) => console.log(e))
}


module.exports = connectDb