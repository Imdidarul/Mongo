const express = require("express")
const router = express.Router()
const orderController = require("../controllers/orderController")

router.post("/addOrder",orderController.addOrder)
router.get("/findByUserId",orderController.findByuserId)
router.delete("/deleteById",orderController.deleteById)
// router.put("/updateById",orderController.updateById)

module.exports = router