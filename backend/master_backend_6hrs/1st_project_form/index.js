const express = require("express")
const port = 5000
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mayur:mayur@cluster0.ldawsar.mongodb.net/",{
    dbName:"form_nodejs"
}).then(() => console.log("database connected")).catch((e) => console.log(e))



app.listen(port, () =>{
    console.log(`listening on ${port}`)
})