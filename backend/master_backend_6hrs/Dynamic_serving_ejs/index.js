const express = require("express")
const port = 5000
const app = express()

// Setting up view engine
app.set("view engine", "ejs")

app.get("/", (req, res) =>{
    //rendering index.ejs file
    res.render("index", {name:"mayur"})  //passing obj that needs to be render on browser
})

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})