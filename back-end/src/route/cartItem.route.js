const express = require("express");
const router = express.Router();


const cartItemController=require("../controller/cartItem.controller.js");
const authentictate=require("../middleware/authenticate.js");

router.put("/:id",authentictate,cartItemController.updateCartItem);

router.delete("/:id",authentictate,cartItemController.removeCartItem);

module.exports=router;