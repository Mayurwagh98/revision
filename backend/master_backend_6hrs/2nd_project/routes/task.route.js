const router = require("express").Router()
const {getTasks, createTask} = require("../controllers/task.controller")
const isAuthenticated = require("../middlewares/auth")

router.get("/all", isAuthenticated,getTasks)
router.post("/addtask", isAuthenticated,createTask)

module.exports = router