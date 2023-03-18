const Blogs = require("../models/Blogs.model")

// -------- Get blogs -------------------
const getBlogs = async(req, res) =>{
    let searchQuery = {}
    let {title, category} = req.query
    if(title){
        searchQuery.title = {$regex: title}
    }
    else if(category){
        searchQuery.category = {$regex: category}
    }
    try {
        const blogs = await Blogs.find(searchQuery)
      
        res.status(200).send(blogs)

    } catch (error) {
        console.log({message: error.message})
    }
}

// get blog by title
const getBlogByTitle = async(req, res) =>{

    let {title} = req.params
    let blogByTitle = await Blogs.findOne({title})
    console.log(blogByTitle)
    try {
        if(!blogByTitle){
            return res.status(404).json({message: "Blog Not Found"})
        }
        
        return res.status(200).json(blogByTitle)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// -------- Create blogs -------------------

const postBlogs = async(req, res) =>{

    let {title, blog_content, category} = req.body

    let existingBlog = await Blogs.findOne({title}) 
    try {
        
        if(existingBlog){
            return res.status(409).json({message: "Blog with this title already exists"})
        }

            const newBlog = await Blogs.create(req.body)
            // await newBlog.save()
            res.status(200).send({message: "Blog Posted"})
        
       
        // newBlog.save()


    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

// -------- Update blogs -------------------

const updateBlogs = async(req, res) =>{

    const blogId = req.params.id
    
    const userID = req.body.userID 
    
    const existingBlog = await Blogs.findOne({_id: blogId})
    // console.log(existingBlog)

    try {
        
        if(userID !== existingBlog.userID){
            return res.status(404).send({message: "Not authorised"})
        }
        else if(!existingBlog){
            res.status(404).send({message: "Blogs not found"})
        }
        else{
           let updatedBlogs =  await Blogs.findByIdAndUpdate({_id: blogId}, req.body,{
                new: true,
                runValidators: true,
                useFindAndModify: false
            })
            res.status(200).send({updatedBlogs, message: "Blog Updated"})
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

            let deleteData = await Blogs.findByIdAndDelete({_id:blogId})
            res.status(200).send({deleteData, message: "Blog Deleted"} )
        }

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}




module.exports = {getBlogs, postBlogs, updateBlogs, deleteBlogs, getBlogByTitle}