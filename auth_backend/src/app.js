const express = require("express")
const app = express()

app.use(express.json())

app.use("/api")
app.use("/api")

module.exports = app
