const signup = require("../controllers/signup.controller")
const signupRoute = require("express").Router()


signupRoute.post("/signup", signup)

module.exports = signupRoute