const express = require("express")

const app = express()
// const cors = require("cors")
const Signup = require("./routes/User.route")
const Login = require("./routes/User.route")
const GetBlogs = require("./routes/Blogs.route")
const PostBlogs = require("./routes/Blogs.route")
const UpdateBlogs = require("./routes/Blogs.route")

app.use(express.json())
// app.use(cors())

app.use("/api", Signup)
app.use("/api", Login)
app.use("/api", GetBlogs)
app.use("/api", PostBlogs)
app.use("/api", UpdateBlogs)

module.exports = app