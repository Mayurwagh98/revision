const express = require("express")
const app = express()

app.use(express.json())


const Notes = require("./routes/notes.routes")

const Create_notes = require("./routes/notes.routes")
const Update_notes = require("./routes/notes.routes")
const Delete_notes = require("./routes/notes.routes")
const User_signup = require("./routes/user.routes")
const User_login = require("./routes/user.routes")

app.use("/api", User_signup)
app.use("/api", User_login)
app.use("/api", Notes)
app.use("/api", Create_notes) 
app.use("/api", Update_notes)
app.use("/api", Delete_notes)



module.exports = app