const {Signup} = require("../controller/User.controller")
const {Login} = require("../controller/User.controller")

const router = require("express").Router()

router.post("/signup", Signup)
router.post("/login", Login)

module.exports = router