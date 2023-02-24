const  mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    
    name: String,
    desc: String,
    price:Number
   
}, {
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("Products", ProductSchema)
