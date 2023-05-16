const http = require("http")
const port = 5000

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        return res.end("<h1>Home</h1>")

    }
    else if(req.url === "/about"){
        return res.end("<h1>About</h1>")
    }
    else{
        return res.end("<h1>Page Not Found</h1>")

    }
})

server.listen(port,() =>{
    console.log(`listening on port ${port}`)
})