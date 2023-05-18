const express = require("express")
const app = express()
const UserRegister = require("./routes/user.route")

app.use(express.json())

app.use("/api", UserRegister)

module.exports = app