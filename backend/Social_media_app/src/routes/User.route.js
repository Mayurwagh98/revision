const router = require("express").Router()
const {getUsers} = require("../controllers/User.controller")

router.get("/users", getUsers)

module.exports = router