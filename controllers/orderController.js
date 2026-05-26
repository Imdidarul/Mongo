const Orders = require("../models/order")



const addOrder = async (req,res)=>{
    try {
        const {product, quantity, userId} = req.body

        const order = new Orders({product, quantity, userId})
        if(!order){
            return res.status(404).send("Could not place order")
        }
        await order.save()
        res.status(200).send("Order added")
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}



const findByuserId = async (req,res) =>{
    try {
        const {id} = req.query
        const orders = await Orders.find({userId:id}).populate("Product").populate("User").exec()
        if(!orders){
            return res.status(404).send("Could not fetch orders")
        }
        console.log(orders)
    
        res.status(200).send(orders)
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}





const deleteById = async (req,res)=>{
    try {
        const {id} = req.query
        const deletedCount = await Orders.deleteOne({_id:id}).exec()
        if(deletedCount==0){
            return res.status(404).send("Could not be deleted")
        }
    
        res.status(200).send("Delted")
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}



module.exports = {addOrder, findByuserId, deleteById}





// const addOrder = (req,res)=>{
//     const {product, quantity, userId} = req.body

//     const order = new Orders(product, quantity, userId)

//     order.save().then(()=>{
//         console.log("Added successfully")
//         res.status(200).send("Order added")
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server failure")
//     })
// }


// const findByuserId = (req,res) =>{
//     const {id} = req.query
//     const orders = Orders.findbyId(id).then(result=>{
//         // console.log("Cart items retrieved")
//         // console.log(result)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server side error")
//     })
// }

// const deleteById = (req,res)=>{
//     const {id} = req.query
//     const deletedCount = Orders.deleteById(id).then(result=>{
//         // console.log(result)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Serverside error")
//     })
// }

// // const updateById = (req,res)=>{
// //     const {id} = req.query

// //     const data = req.body
// //     // console.log(data)

// //     Orders.updateById(id,data).then(result=>{
// //         console.log(result.matchedCount)
// //         res.status(200).send(result)
// //     }).catch(err=>{
// //         console.log(err)
// //         res.status(500).send("Server side error")
// //     })
// // }


// module.exports = {addOrder,findByuserId, deleteById}