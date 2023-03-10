const router = require("express").Router()

const {getBlogs} = require("../controller/Blogs.controller")
const {postBlogs} = require("../controller/Blogs.controller")

router.get("/blogs", getBlogs)
router.post("/create", postBlogs)

module.exports = router