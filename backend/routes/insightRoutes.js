const express=require("express");
const Product=require("../models/Product");

const router=express.Router();

router.get("/",async(req,res)=>{

try{

const products=
await Product.find();

const insights=products.map(product=>{

let pricingAdvice="";
let trend="";


// Pricing Recommendation

if(product.price>5000){

pricingAdvice=
`Consider reducing price of ${product.title} for better sales`;

}

else{

pricingAdvice=
`${product.title} pricing looks competitive`;

}


// Trending Insight

const trendingItems=[

"Headphones",
"Smart Watch",
"Shoes",
"Laptop",
"Mobile"

];

if(

trendingItems.some(item=>

product.title.toLowerCase()
.includes(item.toLowerCase())

)

){

trend=
`${product.title} is trending in the market`;

}
else{

trend=
`${product.title} has stable demand`;

}

return{

title:product.title,
pricingAdvice,
trend

};

});

res.json(insights);

}

catch(error){

console.log(error);

res.status(500).json({

message:"Error"

});

}

});

module.exports=router;