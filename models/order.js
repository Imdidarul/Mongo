const mongoose = require("mongoose")
const Schema = mongoose.Schema


const orderSchema = new Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})


module.exports = mongoose.model("Orders",orderSchema)


// const mongodb = require("mongodb")
// const {getDb} = require("../utils/database")

// class Orders {
//     constructor(product,quantity,userId){
//         this.product = product;
//         this.quantity = quantity;
//         this.userId = userId
//     }

//     save(){
//         const db = getDb()
//         return db.collection('orders').insertOne(this)
//         .then( result =>{
//             console.log(result)
//         }).catch((err)=>{
//             console.log(err)
//             throw err
//         })
//     }
//     static findbyId(userId){
//         const db = getDb()
//         return db.collection('orders').find({userId: userId}).toArray().then((order)=>{
//             console.log(order)
//             return order
//         }).catch(err=>{
//             console.log(err)
//             throw err
//         })
//     }

//     static findItembyId(id){
//         const db = getDb()
//         return db.collection('orders').find({_id: new mongodb.ObjectId(id)}).next().then((result)=>{
//             console.log(result)
//             return result
//         }).catch(err=>{
//             console.log(err)
//             throw err
//         })
//     }

//     static deleteById(orderId){
//         const db = getDb()

//         return db.collection('orders').deleteMany({_id: new mongodb.ObjectId(orderId)}).then(result=>{
//             console.log(result.deletedCount)
//             return result.deletedCount
//         }).catch(err=>{
//             console.log(err)
//             throw err
//         })
//     }
// }
// module.exports = Orders