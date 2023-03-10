const Blogs = require("../models/Blogs.model")

const getBlogs = async(req, res) =>{

    // let {title} = req.body

    try {
        
        const blogs = await Blogs.find()
      
        res.status(200).send(blogs)

    } catch (error) {
        console.log({message: error.message})
    }
}

module.exports = {getBlogs}