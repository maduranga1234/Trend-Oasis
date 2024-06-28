const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");



async function createCart(user){



    try{
        const cart = new Cart({user});
        const createdCart=await cart.save();

        return createdCart;
    }catch(error){
         throw new Error(error.message);
    }
      
}

async function findUserCart(userId){
  try {
    let cart = await Cart.findOne({user:user})

    let cartItems=await CartItem.find({cart:cart._id}).populate("product");

    cart.cartItems=cartItems;

    let totalPrice=0;
    let totalDiscountePrice=0;
    let totalItem=0;

    for(let cartItem of cart.cartItems){
        totalPrice+=cartItem.price;
        totalDiscountePrice+=cartItem.discountedPrice;
        totalItem+=cartItem.quantity;4

    }

    cart.totalPrice=totalPrice;
    cart.totalItem=totalItem;
    cart.discounte=totalPrice-totalDiscountePrice;

    return cart;

  } catch (error) {
     
    throw new Error(error.message)
  }

}

async function addCartItem(userId,req){
    
    try {

        const cart = await Cart.findOne({user:userId});
        const product=await Product.findById(req.productId);
         
        const isPresent = await CartItem.findOne({cart:cart._id,product:product._id,userId})
         
        if(!isPresent){
             
            const cartItem=new CartItem({
                product:product._id,
                cart:cart._id,
                quantity:1,
                userId,
                price:product.price,
                size:req.size,
                discountedPrice:product.discountedPrice
            })

            const createCartItem=await cartItem.save();
            cart.cartItems.push(createCartItem);

            await cart.save();
            return "Item Add To Cart"
        }

    } catch (error) {
        
    }
}

module.exports={createCart,findUserCart,addCartItem}