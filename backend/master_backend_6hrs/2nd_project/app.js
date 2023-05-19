const express = require("express")
const app = express()
const UserRegister = require("./routes/user.route")
const UserLogin = require("./routes/user.route")
const GetUsers = require("./routes/user.route")

app.use(express.json())

app.use("/api", UserRegister)
app.use("/api", UserLogin)
app.use("/api", GetUsers)

module.exports = app