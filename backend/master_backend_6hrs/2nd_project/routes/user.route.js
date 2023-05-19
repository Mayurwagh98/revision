const router = require("express").Router()
const {register, login, getUsers} = require("../controllers/user.controller")


router.post("/users/register", register)
router.post("/users/login", login)
router.get("/users/all", getUsers)



module.exports = router