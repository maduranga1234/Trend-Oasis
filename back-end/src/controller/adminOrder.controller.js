const orderService = require("../services/order.service.js");

const getAllOrders=async(req,res)=>{
    try {
        const orders=await orderService.getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
         return res.status(500).send({error:error.massage});   
    }
}

const confirmedOrders=async(req,res)=>{

    const orderId=req.params.orderId;
try {
    const orders=await orderService.confirmedOrder(orderI);
    return res.status(200).send(orders);
} catch (error) {
     return res.status(500).send({error:error.massage});   
}
}

const shippOrders=async(req,res)=>{

    const orderId=req.params.orderId;
try {
    const orders=await orderService.shipOrder(orderId);
    return res.status(200).send(orders);
} catch (error) {
     return res.status(500).send({error:error.massage});   
}
}


const deliverOrders=async(req,res)=>{

    const orderId=req.params.orderId;
try {
    const orders=await orderService.deliverOrder(orderId);
    return res.status(200).send(orders);
} catch (error) {
     return res.status(500).send({error:error.massage});   
}
}


const cancelledOrders=async(req,res)=>{

    const orderId=req.params.orderId;
try {
    const orders=await orderService.cancelOrder(orderId);
    return res.status(200).send(orders);
} catch (error) {
     return res.status(500).send({error:error.massage});   
}
}


const deleteOrders=async(req,res)=>{

    const orderId=req.params.orderId;
try {
    const orders=await orderService.deleteOrder(orderId);
    return res.status(200).send(orders);
} catch (error) {
     return res.status(500).send({error:error.massage});   
}
}

module.exports={
    getAllOrders,
    confirmedOrders,
    shippOrders,
    deliverOrders,
    cancelledOrders,
    deleteOrders
}