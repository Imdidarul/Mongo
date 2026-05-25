const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient
let _db

const mongoConnect = callback => {
    mongoClient.connect(process.env.MONGO_URI)
    .then(client => {
        console.log("Connected succsesfully")
        _db = client.db()
        callback()
    }).catch(err=>{
        console.log(err)
})
}

const getDb = ()=>{
    if (_db){
        return _db
    }
}



module.exports = {mongoConnect,getDb}