const Product = require("../models/product")

const addProduct = async (req,res)=>{
    try {
        const {title, price, description} = req.body
        const product = new Product({title:title, price:price, description:description})
        await product.save()
        res.status(200).send("Product added")
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}


const findbyId = async(req,res) =>{
    try {
    const {id} = req.query
    const product = await Product.findById(id).exec()
    if (!product){
        console.log("Product not found")
        return res.status(404).send("Error")
    }
    console.log(product)
    res.status(200).send(product)
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")    
    }
}

const findAll = async (req,res)=>{
    try {
    const products = await Product.find({}).exec()
    res.status(200).send(products)   
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}

const deleteById = async (req,res)=>{
    try {
        const {id} = req.query
        const deleted = await Product.deleteOne({_id:id}).exec()
        console.log(deleted.deletedCount)
        if (!deleted){
            res.status(404).send("Error while deleting")
        }
        res.status(200).send("Deleted")
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}


const updateById = async (req,res)=>{
    try {
        const {id} = req.query

        const data = req.body
        console.log(data)
    
        const updated = await Product.updateOne({_id:id},data)
        if(!updated){
            return res.status(404).send("Could not be updated")
        }
        console.log(updated.modifiedCount)
        res.status(200).send("Updated successfully")
    } catch (error) {
        console.log(error)
        res.status(200).send("Server side error")
    }

}

module.exports = {addProduct, findbyId, findAll, deleteById, updateById}

// const addProduct = (req,res)=>{
//     const {title, price, description} = req.body

//     const product = new Product(title,price,description)

//     product.save().then(()=>{
//         console.log("Added successfully")
//         res.status(200).send("Product added")
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server failure")
//     })
// }


// const findbyId = (req,res) =>{
//     const {id} = req.query
//     const product = Product.findbyId(id).then(result=>{
//         console.log("Found the product")
//         console.log(result)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server side error")
//     })
// }

// const findAll = (req,res)=>{
//     Product.findAll().then(result=>{
//         console.log(result)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Serverside error")
//     })
// }

// const deleteById = (req,res)=>{
//     const {id} = req.query
//     const deletedCount = Product.deleteById(id).then(result=>{
//         console.log(result)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Serverside error")
//     })

// }

// const updateById = (req,res)=>{
//     const {id} = req.query

//     const data = req.body
//     console.log(data)

//     Product.updateById(id,data).then(result=>{
//         console.log(result.matchedCount)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server side error")
//     })
// }

// module.exports = {addProduct,findbyId, findAll, deleteById, updateById}