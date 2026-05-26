const Cart = require("../models/cart")


const addCartItem = async (req,res)=>{
    try {
        const {product, quantity, userId} = req.body

        const cartItem = new Cart({product, quantity, userId})
    
        const cart = await cartItem.save()
        res.status(201).send("Item added")
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }

}


const findByuserId = async (req,res) =>{
    try {
        const {id} = req.query
        const cartItems = await Cart.find({userId:id}).exec()
        if (!cartItems){
            return res.status(404).send("Could not fetch cart items")
        }
    
        res.status(200).send(cartItems)
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}


const deleteById = async (req,res)=>{
    try {
        const {id} = req.query
        const deletedCount = await Cart.deleteOne({_id:id}).exec()
        if(!deletedCount){
            return res.status(404).send("Could not be deleted")
        }
        res.status(200).send("Deleted successfully")
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}


const updateById = async (req,res)=>{
    try {
        const {id} = req.query

        const data = req.body
    
        const updated = await Cart.updateOne({_id:id},data)
        if(!updated){
            return res.status(404).send("Could not be updated")
        }
    
        res.staus(200).send("Updated successfully")
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}


const increaseCartItemQuantity = async (req,res)=>{
    try {
        const {id} = req.query

        const cartItem = await Cart.findOne({_id:id})
    
        const quantity = cartItem.quantity+1
    
        const data = {quantity:quantity}
    
        const updated = await Cart.updateOne({_id:id},data)
        if(!updated){
            return res.status(404).send("Couldnot be updated")
        }
        res.status(200).send("Updated sucessfully")
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}




const decreaseCartItemQuantity = async(req,res)=>{
    try {
        const {id} = req.query

        const cartItem = await Cart.findOne({_id:id})
    
    
        const quantity = cartItem.quantity-1
    
        if (quantity == 0){
            const result = await Cart.deleteOne({_id:id})
            console.log("Item deleted as quantity reached 0")
            return res.status(200).send("Item removed from cart")
        }
    
        const data = {quantity:quantity}
        const result = await Cart.updateOne({_id:id},data)
            console.log(result.matchedCount)
            res.status(200).send(result.matchedCount)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")   
    }

}

module.exports = {addCartItem,findByuserId, deleteById, updateById, increaseCartItemQuantity, decreaseCartItemQuantity}

// const addCartItem = (req,res)=>{
//     const {product, quantity, userId} = req.body

//     const cartItem = new Cart(product, quantity, userId)

//     cartItem.save().then(()=>{
//         console.log("Added successfully")
//         res.status(200).send("Item added to cart")
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server failure")
//     })
// }


// const findByuserId = (req,res) =>{
//     const {id} = req.query
//     const cartItems = Cart.findbyId(id).then(result=>{
//         // console.log("Cart items retrieved")
//         // console.log(result)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server side error")
//     })
// }

// // const findAll = (req,res)=>{
// //     Product.findAll().then(result=>{
// //         console.log(result)
// //         res.status(200).send(result)
// //     }).catch(err=>{
// //         console.log(err)
// //         res.status(500).send("Serverside error")
// //     })
// // }

// const deleteById = (req,res)=>{
//     const {id} = req.query
//     const deletedCount = Cart.deleteById(id).then(result=>{
//         // console.log(result)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Serverside error")
//     })
// }

// const updateById = (req,res)=>{
//     const {id} = req.query

//     const data = req.body
//     // console.log(data)

//     Cart.updateById(id,data).then(result=>{
//         console.log(result.matchedCount)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server side error")
//     })
// }


// const increaseCartItemQuantity = async (req,res)=>{
//     const {id} = req.query

//     const cartItem = await Cart.findItembyId(id)
//     // console.log(cartItem)

//     const quantity = cartItem.quantity+1

//     const data = {quantity:quantity}
//     Cart.updateById(id,data).then(result=>{
//         console.log(result.matchedCount)
//         res.status(200).send(result.matchedCount)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server side error")
//     })
// }



// const decreaseCartItemQuantity = async(req,res)=>{
//     try {
//         const {id} = req.query

//         const cartItem = await Cart.findItembyId(id)
    
//         // console.log("Quantity is:-",cartItem.quantity)
    
//         const quantity = cartItem.quantity-1
    
//         if (quantity == 0){
//             const result = await Cart.deleteById(id)
//                 // console.log(result)
//                 console.log("Item deleted as quantity reached 0")
//                 return res.status(200).send("Quantity became zero so deleted item from cart")
//             }
    
//         const data = {quantity:quantity}
//         const result = await Cart.updateById(id,data)
//             console.log(result.matchedCount)
//             res.status(200).send(result.matchedCount)
        
//     } catch (error) {
//         console.log(error)
//         res.status(500).send("Server side error")   
//     }

// }


// module.exports = {addCartItem,findByuserId, deleteById, updateById, increaseCartItemQuantity, decreaseCartItemQuantity}