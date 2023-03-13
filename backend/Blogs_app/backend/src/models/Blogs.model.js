const mongoose = require("mongoose")

const BlogsSchema = mongoose.Schema({
    title: String,
    blog_content: String,
    category: [],
    userID: String
})

module.exports = mongoose.model("Blog", BlogsSchema)