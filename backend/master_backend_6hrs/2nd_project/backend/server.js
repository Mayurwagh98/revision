const app = require("./app")
const connectDb = require("./configs/db")
require("dotenv").config()

connectDb()

app.listen(process.env.port,() =>{
    console.log(`server running on ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})