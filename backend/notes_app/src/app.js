const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

// const loginRoute = require("./routes/login.router")
// const signupRoute = require("./routes/signup.router")

app.use("/api")
app.use("/api")


module.exports = app