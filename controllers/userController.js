const User = require("../models/user")

const addUser = (req,res)=>{
    const {name, email, number} = req.body

    const user = new User(name,email,number)

    user.save().then(()=>{
        console.log("Added successfully")
        res.status(200).send("User created")
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Server failure")
    })
}


const findUserById = (req,res) =>{
    const {id} = req.query
    User.findbyId(id).then(result=>{
        console.log("Found the User")
        console.log(result)
        res.status(200).send(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).send("Server side error")
    })
}

module.exports = {addUser, findUserById}