const app = require("./app")
const connectDB = require("./config/db")
require("dotenv").config()

const port = process.env.PORT || 8000

app.listen(port, () =>{
    connectDB()

    console.log(`Working on http://localhost:${port}`)
})