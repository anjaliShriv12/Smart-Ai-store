const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


// Add Product
router.post("/add", async(req,res)=>{

try{

const product = await Product.create(req.body);

res.json(product);

}
catch(error){

console.log(error);

res.status(500).json({

message:"Error adding product"

});

}

});


// Get Products
router.get("/", async(req,res)=>{

try{

const products = await Product.find();

res.json(products);

}
catch(error){

console.log(error);

res.status(500).json({

message:"Error fetching products"

});

}

});


// Update Product
router.put("/:id", async(req,res)=>{

try{

const updatedProduct =

await Product.findByIdAndUpdate(

req.params.id,
req.body,
{new:true}

);

res.json(updatedProduct);

}
catch(error){

console.log(error);

res.status(500).json({

message:"Error updating product"

});

}

});


// Delete Product
router.delete("/:id", async(req,res)=>{

try{

await Product.findByIdAndDelete(
req.params.id
);

res.json({

message:"Deleted Successfully"

});

}
catch(error){

console.log(error);

res.status(500).json({

message:"Error deleting product"

});

}

});

module.exports = router;