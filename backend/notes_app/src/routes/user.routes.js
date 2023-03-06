const userRouter = require("express").Router()
const loginUser = require("../controller/user.controller")
const signupUser = require("../controller/user.controller")
const router = require("./notes.routes")


router.post("/signup", signupUser)
router.post("/login", loginUser)

module.exports = userRouter