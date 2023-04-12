const {wordsFunc, wordsPost, wordsUpdate, wordsDelete} = require("../controllers/Words.controller")
const router = require("express").Router()

router.get("/words", wordsFunc)
router.post("/words/create", wordsPost)
router.patch("/words/update/:id", wordsUpdate)
router.delete("/words/delete/:id", wordsDelete)

module.exports = router
