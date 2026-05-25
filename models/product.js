const mongodb = require("mongodb")
const {getDb} = require("../utils/database")

class Product {
    constructor(title,price,description,userId){
        this.title = title;
        this.price = price;
        this.description = description
    }

    save(){
        const db = getDb()
        return db.collection('products').insertOne(this)
        .then( result =>{
            console.log(result)
        }).catch((err)=>{
            console.log(err)
            throw err
        })
    }
    static findbyId(prodId){
        const db = getDb()
        return db.collection('products').find({_id: new mongodb.ObjectId(prodId)}).next().then((product)=>{
            console.log(product)
            return product
        }).catch(err=>{
            console.log(err)
            throw err
        })
    }

    static findAll(){
        const db = getDb()
        // const products = await db.collection('products').find({})
        // console.log(products)
        // return products
        return db.collection('products').find({}).toArray().then((result)=>{
            // console.log(result)
            return result
        }).catch(err=>{
            console.log(err)
            throw err
        })
    }

    static deleteById(id){
        const db = getDb()

        return db.collection('products').deleteMany({_id: new mongodb.ObjectId(id)}).then(result=>{
            console.log(result.deletedCount)
            return result.deletedCount
        }).catch(err=>{
            console.log(err)
            throw err
        })
    }

    static updateById(id, data){
        const db = getDb()
        // const updatedDoc = doc
        console.log(data)
        return db.collection("products").updateOne(
            {_id:new mongodb.ObjectId(id)},
            {
                $set:data,
                $currentDate:{lastModified: true}
            }
        ).then(result=>{
            console.log("Updated")
            return result
        }).catch(err=>{
            // console.log(err)
            throw err
        })
    }
}
module.exports = Product