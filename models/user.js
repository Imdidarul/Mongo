const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    number:{
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("User",userSchema)

// const mongodb = require("mongodb")
// const {getDb} = require("../utils/database")

// class User {
//     constructor(name,email,number){
//         this.name = name;
//         this.email = email;
//         this.number = number
//     }

//     save(){
//         const db = getDb()
//         return db.collection('users').insertOne(this)
//         .then( result =>{
//             console.log(result)
//         }).catch((err)=>{
//             console.log(err)
//             throw err
//         })
//     }
//     static findbyId(userId){
//         const db = getDb()
//         return db.collection('users').find({_id: new mongodb.ObjectId(userId)}).next().then((user)=>{
//             console.log(user)
//             return user
//         }).catch(err=>{
//             console.log(err)
//             throw err
//         })
//     }

// }

// module.exports = User