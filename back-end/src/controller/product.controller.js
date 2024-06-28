
const productService=require("../services/product.service.js")





const createProduct=async(req,res)=>{

    try {
        const product = await productService.createProduct(req.body);

        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
}


const deleteProduct=async(req,res)=>{
     const productId = req.params.id;
    try {
        const product = await productService.createProduct(productId);

        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
}

const updateProduct=async(req,res)=>{
    const productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId,req.body);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
}


const findProductById=async(req,res)=>{
    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
}


const getAllProduct=async(req,res)=>{
    const productId = req.params.id;
    try {
        const product = await productService.getAllProduct(req.query);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
}


const createMultipleProduct=async(req,res)=>{
    const productId = req.params.id;
    try {
        const product = await productService.createMultipleProduct(req.body);
        return res.status(201).send({message:"Product Created Successfully"});

    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
}

module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProduct,
    createMultipleProduct,
    findProductById
}