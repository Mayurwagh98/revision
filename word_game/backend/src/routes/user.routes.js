const router = require("express").Router()
const {getUser, createUser, deleteUser} = require("../controllers/user.controller")

router.get("/users", getUser)
router.post("/users/create", createUser)
router.delete("/users/delete/:id", deleteUser)

module.exports = router