const mongoose = require("mongoose")

// deprecation warning
mongoose.set("strictQuery",true)

const connectDb = () =>{
        mongoose.connect(process.env.MONGOURL,{
        dbName:"todo"
    }).then((c) => {
        console.log(`database connected ${c.connection.host}`)
    }).catch((e) => console.log(e))
}


module.exports = connectDb