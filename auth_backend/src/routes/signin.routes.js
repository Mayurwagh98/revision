const signin = require("../controllers/signin.controller")
const signiRoute = require("express").Router()


signiRoute.post("/signin", signin)

module.exports = signiRoute