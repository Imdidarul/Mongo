const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/addUser",userController.addUser)
router.get("/findUserById",userController.findUserById)
// router.get("/findAllProducts",productController.findAll)
// router.delete("/deleteById",productController.deleteById)
// router.put("/updateById",productController.updateById)

module.exports = router