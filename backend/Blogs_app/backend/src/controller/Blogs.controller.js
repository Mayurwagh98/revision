const Blogs = require("../models/Blogs.model")

// -------- Get blogs -------------------
const getBlogs = async(req, res) =>{
 let searchQuery = {}
    let {title} = req.query
    if(title){
        searchQuery.title = {$regex: title}
    }
    try {
        
        const blogs = await Blogs.find(searchQuery)
      
        res.status(200).send(blogs)

    } catch (error) {
        console.log({message: error.message})
    }
}

// -------- Create blogs -------------------

const postBlogs = async(req, res) =>{

    let {title, blog_content, category} = req.body

    let existingBlog = await Blogs.findOne({title}) 
    try {
        
        if(existingBlog){
            res.status(404).send({message: "Blog with this title already exists"})
        }
        else{

            const newBlog = await Blogs.create({title, blog_content, category})
            res.status(200).send({message: "Blog Posted"})
        }
        // newBlog.save()


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

// -------- Delete blogs -------------------

const deleteBlogs = async(req, res) =>{

    let blogId = req.params.id
    let existingBlog = await Blogs.findOne({blogId})

    try {
        
        if(!existingBlog){
            res.status(404).send({message: "Blog not found"})
        }
        else{

            await Blogs.findByIdAndDelete({_id:blogId})
            res.status(200).send({message: "Blog Deleted"})
        }

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

// -------- Search blogs -------------------

const searchBlogs = async(req, res) =>{
    // let {title} = req.body.query
    const query = req.params.name

    let blogSearch = await Blogs.find(query)

    try {
        
        if(!blogSearch){

            res.status(404).send({message: "Blog not found"})
        }
        else{

            await Blogs.find(query)
            res.status(200).send(blogSearch)
        }


    } catch (error) {
        res.status(500).send({message: error.message})   
    }
}


module.exports = {getBlogs, postBlogs, updateBlogs, deleteBlogs, searchBlogs}