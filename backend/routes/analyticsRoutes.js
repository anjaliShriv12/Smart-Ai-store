const express=require("express");
const Product=require("../models/Product");

const router=express.Router();

router.get("/",async(req,res)=>{

try{

const products=
await Product.find();


// 4-digit demo revenue

const revenue=
Math.floor(
7000 + Math.random()*2000
);

// 7000–8999 range


const topProducts=
products.slice(0,5);

res.json({

revenue,
topProducts

});

}

catch(error){

res.status(500).json(error);

}

});

module.exports=router;