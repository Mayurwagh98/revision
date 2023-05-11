const router = require("express").Router()
const {getPosts, createPosts, getSinglePost} = require("../controllers/Post.controller")

router.get("/posts", getPosts)
router.get("/posts/:id", getSinglePost)
router.post("/posts", createPosts)

module.exports = router