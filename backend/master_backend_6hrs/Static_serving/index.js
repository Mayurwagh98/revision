const express = require("express")
const app = express()
const path = require("path")

//  path.resolve() - to get the path the directory
// public - folder in which the static file which we want to serve
app.use(express.static(path.join(path.resolve(), "public")))


// setting view engine
app.set("view engine", "ejs")

app.get("/", (req, res) =>{

    return res.render("index")
})


app.listen(5000,()  =>{

    console.log("listening on 5000")

})
