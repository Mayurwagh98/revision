const router = require("express").Router()

const {getResults, createResults, deleteResult} = require("../controllers/result.controller")


router.get("/results", getResults)
router.post("/results/create", createResults)
router.delete("/results/delete/:id", deleteResult)

module.exports = router