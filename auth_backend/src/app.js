const express = require("express")
const app = express()

app.use(express.json())

// const loginRoute = require("./routes/login.router")
const signupRoute = require("./routes/signup.routes")

// app.use("/api", loginRoute)
app.use("/api", signupRoute)


module.exports = app