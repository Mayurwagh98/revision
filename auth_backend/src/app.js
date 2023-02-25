const express = require("express")
const app = express()

app.use(express.json())

const signupRoute = require("./routes/signup.routes")
const signinRoute = require("./routes/signin.routes")

app.use("/api", signupRoute)
app.use("/api", signinRoute)


module.exports = app