const {Signup} = require("../controller/User.controller")

const router = require("express").Router()

router.post("/signup", Signup)

module.exports = router