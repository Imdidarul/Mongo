const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cartController")

router.post("/addCartItem",cartController.addCartItem)
router.get("/findByUserId",cartController.findByuserId)
// router.get("/findAllProducts",productController.findAll)
router.delete("/deleteById",cartController.deleteById)
router.put("/updateById",cartController.updateById)
router.put("/increaseCartItemQuantity",cartController.increaseCartItemQuantity)
router.put("/decreaseCartItemQuantity",cartController.decreaseCartItemQuantity)

module.exports = router