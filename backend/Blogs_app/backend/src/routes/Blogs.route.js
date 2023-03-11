const router = require("express").Router()
const {getBlogs} = require("../controller/Blogs.controller")
const {postBlogs} = require("../controller/Blogs.controller")
const {updateBlogs} = require("../controller/Blogs.controller")
const {deleteBlogs} = require("../controller/Blogs.controller")

router.get("/blogs", getBlogs)
router.post("/create", postBlogs)
router.patch("/blogs/update/:id", updateBlogs)
router.delete("/blogs/delete/:id", deleteBlogs)


module.exports = router