const Blogs = require("../models/Blogs.model")

// -------- Get blogs -------------------
const getBlogs = async(req, res) =>{

    try {
        
        const blogs = await Blogs.find()
      
        res.status(200).send(blogs)

    } catch (error) {
        console.log({message: error.message})
    }
}

// -------- Create blogs -------------------

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
        res.status(500).send({message: error.message})
    }
}

// -------- Update blogs -------------------

const updateBlogs = async(req, res) =>{

    let blogId = req.params.id

    let existingBlog = await Blogs.findOne({blogId})

    try {
        
        if(!existingBlog){
            res.status(404).send({message: "Blogs not found"})
        }
        else{
            await Blogs.findByIdAndUpdate({_id: blogId}, req.body)
            res.status(200).send({message: "Blog Updated"})
        }

    } catch (error) {
        
        res.status(500).send({message: error.message})
    }
}


module.exports = {getBlogs, postBlogs, updateBlogs}