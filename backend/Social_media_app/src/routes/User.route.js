const router = require("express").Router()
const {getUsers, createUser} = require("../controllers/User.controller")


router.get("/users", getUsers)
router.post("/register", createUser)

module.exports = router