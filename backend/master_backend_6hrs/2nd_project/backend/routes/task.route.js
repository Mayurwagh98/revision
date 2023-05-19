const router = require("express").Router()
const {getTasks, createTask, updateTask, deleteTask} = require("../controllers/task.controller")
const isAuthenticated = require("../middlewares/auth")

router.get("/all", isAuthenticated,getTasks)
router.post("/addtask", isAuthenticated,createTask)
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)

module.exports = router