const cartService=require("../services/cart.service.js");

const findUserCart=async(req,res)=>{
    const user = req.user;
    try {
       const cart=await cartService.findUserCart(user._id);
       return res.status(200).send(cart); 
    } catch (error) {
        
        return res.status(500).send({error:error.massage})
    }
}


const addItemToCart=async(req,res)=>{
    const user = req.user;
    try {
       const cartItem=await cartService.addCartItem(user._id,req)
       return res.status(200).send(cartItem); 
    } catch (error) {
        
        return res.status(500).send({error:error.massage})
    }
}

module.exports={
    findUserCart,
    addItemToCart
}