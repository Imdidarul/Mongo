const User = require("../models/user")

const addUser = async (req,res)=>{
    try {
        const {name, email, number} = req.body

        const user = new User({name:name,email:email,number:number})
    
        await user.save()
        res.status(201).send("User created")
    } catch (error) {
        console.log(error)
        res.status(500).send("Serer side error")
    }
}



const findUserById = async (req,res) =>{
    try {
        const {id} = req.query
        const user = await User.findById(id).exec()
        if(!user){
            return res.status(404).send("Couldnot get user")
        }
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send("Server side error")
    }
}

module.exports = {addUser,findUserById}




// const addUser = (req,res)=>{
//     const {name, email, number} = req.body

//     const user = new User(name,email,number)

//     user.save().then(()=>{
//         console.log("Added successfully")
//         res.status(200).send("User created")
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server failure")
//     })
// }


// const findUserById = (req,res) =>{
//     const {id} = req.query
//     User.findbyId(id).then(result=>{
//         console.log("Found the User")
//         console.log(result)
//         res.status(200).send(result)
//     }).catch(err=>{
//         console.log(err)
//         res.status(500).send("Server side error")
//     })
// }

// module.exports = {addUser, findUserById}