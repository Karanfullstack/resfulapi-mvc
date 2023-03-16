const Product = require('../models/Product.js')

//@GetAll
const productAll = async(req, res)=>{
    try{
        const product = await Product.find();
    res.status(200).json({
        sucess:true,
        product,
        })
    } catch(e){
       res.json({message:e});
    }
};

// @PostProducts
const productPost = async(req, res) =>{
    try{
        const product = await Product.create(req.body);
    res.status(200).json({
        sucess:true,
        message:"Product has been added",
        });
    }catch(e){
        res.json({message:e});
    }
};


// @ProductDeleteByID
const productDelete = async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.Id);
    res.status(204).json({
        product,
        sucess:true,
        message:"Sucessfully Deleted",
        })
    }catch(err){
        res.json({
            sucess:false,
            message:"Could not delete " + err,
        })
    }
};

// @ProductGetByID
const getOne = async(req, res)=>{
    try{
        const product = await Product.findById(req.params.Id);
    res.status(200).json({
        sucess:true,
        product
        });

    }catch(err){
        res.json({
            sucess:false,
            message:err + "Unable to Update!"
        });
    }
}


// @UpdateProduct
const UpdateProduct = async(req, res)=>{
    try{
        let  product = await Product.findById(req.params.Id);
      product = await Product.findByIdAndUpdate(req.params.Id,req.body);

    res.status(204).json({
        sucess:true,
        product
        });
        
    }catch(err){
        res.json({
            sucess:false,
            message:"Not Updated"
        })
    }
}

module.exports = {
    productAll,
    productPost,
    productDelete,
    getOne,
    UpdateProduct
}