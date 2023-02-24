const router = require("express").Router()
const Products = require("../models/products.model")

// posting
router.post("/register", async(req, res) =>{
    
    try {
        
        const newProduct = await Products.create(req.body)
        

        res.status(201).json(newProduct)
        
       

    } catch (error) {
        res.status(500).json(error.message)
    }
})

// getting 
router.get("/products", async(req, res) =>{

    try {
        const products = await Products.find()

        res.status(200).json(products)

    } catch (error) {
        res.status(404).json(error.message)
    }

    
})

// update

router.put("/products/:id", async(req, res) =>{
    
    let product = await Products.findById(req.params.id)

    if(!product){  // if product deoesn't exists
        return res.status(500).json({
            success: false,
            message: "Product Not Found"
        })
    }

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

// deleting
router.delete("/products/:id", async(req, res) =>{

    const product = await Products.findById(req.params.id)

    if(!product){  // if product deoesn't exists
        return res.status(500).json({
            success: false,
            message: "Product Not Found"
        })
    }

    await product.remove()

    res.status(200).json({
        success: true,
        message: "Product has been deleted"
    })
})

module.exports = router