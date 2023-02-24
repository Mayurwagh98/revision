const express = require("express")
const app = express()

app.use(express.json())

const productRoutes = require("./routes/products.route")

app.use("/api", productRoutes)


app.get("/", async(req, res) =>{
    return res.send("<h1>You are on home route, go to /api/(wherever you want to visit)</h1>")
})

module.exports = app