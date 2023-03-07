const router = require("express").Router()
const {getNotes,createNotes, updateNotes, deleteNote} = require("../controller/notes.controller")
const authorize = require("../middleware/auth")


router.get("/notes", authorize ,getNotes)

router.post("/notes/create",authorize ,createNotes)

router.patch("/notes/update/:id", authorize,updateNotes)

router.delete("/notes/delete/:id", authorize,deleteNote)

module.exports = router