const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new Schema({
    product:{
        type: Object,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Cart", cartSchema)


// const mongodb = require("mongodb")
// const {getDb} = require("../utils/database")

// class Cart {
//     constructor(product,quantity,userId){
//         this.product = product;
//         this.quantity = quantity;
//         this.userId = userId
//     }

//     save(){
//         const db = getDb()
//         return db.collection('cart').insertOne(this)
//         .then( result =>{
//             console.log(result)
//         }).catch((err)=>{
//             console.log(err)
//             throw err
//         })
//     }
//     static findbyId(userId){
//         const db = getDb()
//         return db.collection('cart').find({userId: userId}).toArray().then((cart)=>{
//             console.log(cart)
//             return cart
//         }).catch(err=>{
//             console.log(err)
//             throw err
//         })
//     }

//     static findItembyId(id){
//         const db = getDb()
//         return db.collection('cart').find({_id: new mongodb.ObjectId(id)}).next().then((result)=>{
//             console.log(result)
//             return result
//         }).catch(err=>{
//             console.log(err)
//             throw err
//         })
//     }

//     static deleteById(cartId){
//         const db = getDb()

//         return db.collection('cart').deleteMany({_id: new mongodb.ObjectId(cartId)}).then(result=>{
//             console.log(result.deletedCount)
//             return result.deletedCount
//         }).catch(err=>{
//             console.log(err)
//             throw err
//         })
//     }

//     static updateById(id, data){
//         const db = getDb()
//         // const updatedDoc = doc
//         console.log(data)
//         return db.collection("cart").updateOne(
//             {_id:new mongodb.ObjectId(id)},
//             {
//                 $set:data,
//                 $currentDate:{lastModified: true}
//             }
//         ).then(result=>{
//             console.log("Updated")
//             return result
//         }).catch(err=>{
//             // console.log(err)
//             throw err
//         })
//     }
// }
// module.exports = Cart