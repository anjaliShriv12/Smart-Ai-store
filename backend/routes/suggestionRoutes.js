const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async(req,res)=>{

try{

const products =
await Product.find();

const suggestions = products.map(product=>{

let recommendation="";

if(product.stock<5){

recommendation=
`Low stock alert: Increase inventory for ${product.title}`;

}

else if(product.price>10000){

recommendation=
`Consider offering discounts on ${product.title}`;

}

else{

recommendation=
`${product.title} is performing normally`;

}

return{

title:product.title,
suggestion:recommendation

};

});

res.json(suggestions);

}
catch(error){

console.log(error);

res.status(500).json({

message:"Error"

});

}

});

module.exports=router;