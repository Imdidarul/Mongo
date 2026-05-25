const express = require("express")
const app = express()
// const {mongoConnect} = require("./utils/database")
const productRoute = require("./routes/productRoute")
const userRoute = require("./routes/userRoute")
const cartRoute = require("./routes/cartRoute")
const orderRoute = require("./routes/orderRoute")
const mongoose = require("mongoose")
require("dotenv").config()

app.use(express.json())



app.use("/product",productRoute)
app.use("/user",userRoute)
app.use("/cart",cartRoute)
app.use("/order",orderRoute)




// mongoConnect(()=>{
//     console.log("Connected")
//     app.listen(3000)
// })


mongoose.connect(process.env.MONGO_URI)
.then(result=>{
    console.log("Server is running")
    app.listen(3000)
}).catch(err=>{
    console.log(err)
})