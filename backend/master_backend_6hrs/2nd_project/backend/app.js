const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")

// ---- user routes ---------
// const UserRegister = require("./routes/user.route")
// const UserLogin = require("./routes/user.route")
// const GetUsers = require("./routes/user.route")
// const GetMyDetails = require("./routes/user.route")
// const Logout = require("./routes/user.route")
const usersRouter = require("./routes/user.route")
const tasksRouter = require("./routes/task.route")

// --------- tasks routes ----------
// const GetTasks = require("./routes/task.route")
// const AddTask = require("./routes/task.route")
// const UpdateTask = require("./routes/task.route")
// const DeleteTask = require("./routes/task.route")
const { errorMiddleware } = require("./middlewares/error")

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // we can't pass cookies to frontend, if keep false
}));
// app.use(cors())

app.get("/", (req, res) =>{
    return res.send("<h1>Working</h1>")
})

// app.use("/api/users", UserRegister)
// app.use("/api/users", UserLogin)
// app.use("/api/users", GetUsers)
// app.use("/api/users", GetMyDetails)
// app.use("/api/users", Logout)
app.use("/api/users", usersRouter)
app.use("/api/tasks", tasksRouter)
// app.use("/api/tasks", GetTasks)
// app.use("/api/tasks", AddTask)
// app.use("/api/tasks", UpdateTask)
// app.use("/api/tasks", DeleteTask)

app.use(errorMiddleware);

module.exports = app