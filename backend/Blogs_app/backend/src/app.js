const express = require("express")
const app = express()
// const cors = require("cors")
const Signup = require("./routes/User.route")

app.use(express.json())
// app.use(cors())

app.use("/api", Signup)




module.exports = app