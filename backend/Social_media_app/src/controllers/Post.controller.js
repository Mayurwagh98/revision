const Post = require("../models/Post.model")

let getPosts = async(req, res) =>{

    try {
        let posts = await Post.find()

        return res.status(200).send(posts)
    } catch (error) {
        return res.send(500).send({message:error.message})
    }
}

let getSinglePost = async(req, res) =>{

    let postId = req.params.id

    let existingPost = await Post.findById({_id:postId})

    try {
        
        if(!existingPost){
            return res.status(404).send({message: "Post not found"})

        }

        let singlePost = await Post.findById(existingPost)

        return res.status(200).send(singlePost)

    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}


let createPosts = async(req, res) =>{

    let {text} = req.body
    let existingPost = await Post.findOne({text})

    try {
        if(existingPost){
            return res.status(500).send({message:"Post already exists"})
        }    

        let newPost = await Post.create(req.body)

        return res.status(201).send({message: "Post created", newPost})


    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}


module.exports = {getPosts, createPosts, getSinglePost}