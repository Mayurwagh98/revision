const express = require("express")
const app = express()
const cors = require("cors")
const Words = require("./routes/words.routes")
const WordsPost = require("./routes/words.routes")
const wordsUpdate = require("./routes/words.routes")
const wordsDelete = require("./routes/words.routes")
const getUsers = require("./routes/user.routes")
const createUser = require("./routes/user.routes")
const deleteUser = require("./routes/user.routes")

app.use(express.json())
app.use(cors())

app.use("/api",Words)
app.use("/api",WordsPost)
app.use("/api",wordsUpdate)
app.use("/api",wordsDelete)
app.use("/api",getUsers)
app.use("/api",createUser)
app.use("/api",deleteUser)

module.exports = app