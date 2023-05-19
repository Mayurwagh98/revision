const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const UserRegister = require("./routes/user.route")
const UserLogin = require("./routes/user.route")
const GetUsers = require("./routes/user.route")
const GetMyDetails = require("./routes/user.route")
const Logout = require("./routes/user.route")

const GetTasks = require("./routes/task.route")
const AddTask = require("./routes/task.route")

app.use(express.json())
app.use(cookieParser())

app.use("/api/users", UserRegister)
app.use("/api/users", UserLogin)
app.use("/api/users", GetUsers)
app.use("/api/users", GetMyDetails)
app.use("/api/users", Logout)

app.use("/api/tasks", GetTasks)
app.use("/api/tasks", AddTask)

module.exports = app