const mongodb = require("mongodb")
const {getDb} = require("../utils/database")

class User {
    constructor(name,email,number){
        this.name = name;
        this.email = email;
        this.number = number
    }

    save(){
        const db = getDb()
        return db.collection('users').insertOne(this)
        .then( result =>{
            console.log(result)
        }).catch((err)=>{
            console.log(err)
            throw err
        })
    }
    static findbyId(userId){
        const db = getDb()
        return db.collection('users').find({_id: new mongodb.ObjectId(userId)}).next().then((user)=>{
            console.log(user)
            return user
        }).catch(err=>{
            console.log(err)
            throw err
        })
    }

}

module.exports = User