const router = require("express").Router()
const {register, login, getUsers, getMyDetails, logout} = require("../controllers/user.controller")
const isAuthenticated = require("../middlewares/auth")


router.post("/register", register)
router.post("/login", login)
router.get("/all", getUsers)
router.get("/mydetails", isAuthenticated,getMyDetails)
router.get("/logout",logout)



module.exports = router