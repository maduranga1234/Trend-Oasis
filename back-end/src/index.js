const express = require("express")
const cors = require("cors")
const app=express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message : "welcome to ecommerce api - node",status:true})
})

const authRouters = require("./route/auth.route.js");
app.use("/auth",authRouters);

const userRouters = require("./route/user.route.js");
app.use("/api/users",userRouters);

const productRouter=require("./route/product.routes.js");
app.use("/api/products",productRouter);

const adminProductRouter=require("./route/adminProduct.route.js");
app.use("/api/admin/products",adminProductRouter);

const cartRouter=require("./route/cart.router.js");
app.use("/api/cart",cartRouter);

const cartItemRouter=require("./route/cartItem.route.js");
app.use("/api/cart_items",cartItemRouter);

const orderRouter=require("./route/order.routes.js");
app.use("/api/orders",orderRouter);

const adminOrderRouter=require("./route/adminOrder.router.js");
app.use("/api/admin/orders",adminOrderRouter);

const reviewRouter=require("./route/review.router.js");
app.use("/api/reviews",reviewRouter);


const ratingRouter=require("./route/rating.route.js");
app.use("/api/ratings",ratingRouter);



module.exports=app;