const Product = require("../models/product")

const addProduct = (req,res)=>{
    const {title, price, description} = req.body

    const product = new Product(title,price,description)

    product.save().then(()=>{
        console.log("Added successfully")
        res.status(200).send("Product added")
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Server failure")
    })
}


const findbyId = (req,res) =>{
    const {id} = req.query
    const product = Product.findbyId(id).then(result=>{
        console.log("Found the product")
        console.log(result)
        res.status(200).send(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Server side error")
    })
}

const findAll = (req,res)=>{
    Product.findAll().then(result=>{
        console.log(result)
        res.status(200).send(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Serverside error")
    })
}

const deleteById = (req,res)=>{
    const {id} = req.query
    const deletedCount = Product.deleteById(id).then(result=>{
        console.log(result)
        res.status(200).send(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Serverside error")
    })

}

const updateById = (req,res)=>{
    const {id} = req.query

    const data = req.body
    console.log(data)

    Product.updateById(id,data).then(result=>{
        console.log(result.matchedCount)
        res.status(200).send(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Server side error")
    })

}

module.exports = {addProduct,findbyId, findAll, deleteById, updateById}