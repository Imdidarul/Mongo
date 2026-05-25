const express = require("express")
const app = express()
const {mongoConnect} = require("./utils/database")
const productRoute = require("./routes/productRoute")
const userRoute = require("./routes/userRoute")
const cartRoute = require("./routes/cartRoute")
const orderRoute = require("./routes/orderRoute")
require("dotenv").config()

app.use(express.json())



app.use("/product",productRoute)
app.use("/user",userRoute)
app.use("/cart",cartRoute)
app.use("/order",orderRoute)


mongoConnect(()=>{
    console.log("Connected")
    app.listen(3000)
})