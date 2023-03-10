const router = require("express").Router()
const { model } = require("mongoose")
const {getBlogs} = require("../controller/Blogs.controller")

router.get("/", getBlogs)

module.exports = router