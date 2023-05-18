const cookieParser = require("cookie-parser")
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
app.use(cookieParser())

app.set("view engine", "ejs")

// middleware
let isAuthenticated = (req, res, next) =>{
    let {token} = req.cookies
    if(token){
        next()
    }
    else{
        res.render("login")
    }
}

app.get("/", isAuthenticated,(req, res) =>{
   res.render("logout")
})


// const userSchema = new mongoose.Schema({
//     name:String,
//     email: String
// })

// const Users = mongoose.model("User", userSchema)

app.post("/login",async(req, res) =>{
    res.cookie("token","loggedin",{
        httpOnly:true,
        expires: new Date(Date.now() + 60000)
    })
    res.redirect("/")
    
})

app.get("/logout",(req, res) =>{
   
    res.cookie("token",null,{
        httpOnly:true,
        expires: new Date(Date.now())
    })
    res.redirect("/")
    
})

app.listen(port, () =>{
    console.log(`listening on ${port}`)
})