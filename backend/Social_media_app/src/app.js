const express = require("express")
const app = express()
const GetUsers = require("./routes/User.route")




app.use(express.json())

app.use("/api", GetUsers)





module.exports = app