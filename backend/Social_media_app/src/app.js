const express = require("express")
const app = express()
const GetUsers = require("./routes/User.route")
const GetPosts = require("./routes/Post.route")
const GetSinglePost = require("./routes/Post.route")
const CreatePosts = require("./routes/Post.route")




app.use(express.json())

app.use("/api", GetUsers)
app.use("/api", GetPosts)
app.use("/api", GetSinglePost)
app.use("/api", CreatePosts)





module.exports = app