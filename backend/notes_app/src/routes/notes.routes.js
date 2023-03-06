const router = require("express").Router()
const getNotes = require("../controller/Get_notes.controller")
const createNote = require("../controller/Create_notes.controller")
const updateNotes = require("../controller/Update_notes.controller")
const deleteNote = require("../controller/Delete_notes.controller")

router.get("/notes", getNotes)

router.post("/create", createNote)

router.patch("/update/:id", updateNotes)

router.delete("/delete/:id", deleteNote)

module.exports = router