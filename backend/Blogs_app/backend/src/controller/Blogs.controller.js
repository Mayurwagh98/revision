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

const postBlogs = async(req, res) =>{

    let {title, blog_content, category} = req.body

    try {
        
        let existingBlog = await Blogs.findOne({title}) 

        if(existingBlog){
            res.status(404).send({message: "This Blogs already exists"})
        }

        const newBlog = await Blogs.create({title, blog_content, category})
        newBlog.save()

        res.status(200).send({message: "Blog Posted"})

    } catch (error) {
        
    }
}

module.exports = {getBlogs, postBlogs}