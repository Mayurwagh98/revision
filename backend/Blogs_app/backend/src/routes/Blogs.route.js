const router = require("express").Router()
const {getBlogs} = require("../controller/Blogs.controller")
const {postBlogs} = require("../controller/Blogs.controller")
const {updateBlogs} = require("../controller/Blogs.controller")
const {deleteBlogs} = require("../controller/Blogs.controller")
const authorization = require("../middleware/authorization")
const {getBlogByTitle} = require("../controller/Blogs.controller")

router.get("/blogs", authorization,getBlogs)
router.get("/blogs/:title", authorization, getBlogByTitle)
router.post("/blogs/create",authorization,postBlogs)
router.patch("/blogs/update/:id", authorization,updateBlogs)
router.delete("/blogs/delete/:id", authorization,deleteBlogs)


module.exports = router