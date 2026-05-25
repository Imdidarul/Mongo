const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.post("/addProduct",productController.addProduct)
router.get("/findProduct",productController.findbyId)
router.get("/findAllProducts",productController.findAll)
router.delete("/deleteById",productController.deleteById)
router.put("/updateById",productController.updateById)

module.exports = router