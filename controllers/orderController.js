const Orders = require("../models/order")

const addOrder = (req,res)=>{
    const {product, quantity, userId} = req.body

    const order = new Orders(product, quantity, userId)

    order.save().then(()=>{
        console.log("Added successfully")
        res.status(200).send("Order added")
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Server failure")
    })
}


const findByuserId = (req,res) =>{
    const {id} = req.query
    const orders = Orders.findbyId(id).then(result=>{
        // console.log("Cart items retrieved")
        // console.log(result)
        res.status(200).send(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Server side error")
    })
}

const deleteById = (req,res)=>{
    const {id} = req.query
    const deletedCount = Orders.deleteById(id).then(result=>{
        // console.log(result)
        res.status(200).send(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Serverside error")
    })
}

// const updateById = (req,res)=>{
//     const {id} = req.query

//     const data = req.body
//     // console.log(data)

//     Orders.updateById(id,data).then(result=>{
//         console.log(result.matchedCount)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server side error")
//     })
// }


module.exports = {addOrder,findByuserId, deleteById}