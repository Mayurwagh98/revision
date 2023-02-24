const router = require("express").Router()
const Products = require("../models/products.model")

router.post("/register", async(req, res) =>{
    
    try {
        
        const newProduct = await Products.create(req.body)
        

        res.status(201).json(newProduct)
        
       

    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.get("/products", async(req, res) =>{

    try {
        const products = await Products.find()

        res.status(200).json(products)

    } catch (error) {
        res.status(404).json(error.message)
    }

    
})

router.put("/products/:id", async(req, res) =>{
    
    let product = await Products.findById(req.params.id)

    product = await Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        product
    })

})

module.exports = router