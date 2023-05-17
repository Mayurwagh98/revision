const express = require("express")
const port = 5000
const app = express()
const mongoose = require("mongoose")
const path = require("path")


mongoose.connect("mongodb+srv://mayur:mayur@cluster0.ldawsar.mongodb.net/",{
    dbName:"form_nodejs"
}).then(() => console.log("database connected")).catch((e) => console.log(e))


app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")

app.get("/", (req, res) =>{
    res.render("login")
})


const userSchema = new mongoose.Schema({
    name:String,
    email: String
})

const Users = mongoose.model("User", userSchema)

app.post("/", async(req, res) =>{
    let {name, email} = req.body
    
    await Users.create({name, email})

    res.redirect("logout")
    
})

app.get("/logout",(req, res) =>{
    res.render("logout")
})

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})