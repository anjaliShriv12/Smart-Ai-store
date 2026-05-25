// const express=require("express");
// const Product=require("../models/Product");

// const router=express.Router();

// router.get("/",async(req,res)=>{

// try{

// const products=
// await Product.find();


// // 4-digit demo revenue

// const revenue=
// Math.floor(
// 7000 + Math.random()*2000
// );

// // 7000–8999 range


// const topProducts=
// products.slice(0,5);

// res.json({

// revenue,
// topProducts

// });

// }

// catch(error){

// res.status(500).json(error);

// }

// });

// module.exports=router;






const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    // Better revenue simulation (based on product count)
    const revenue = products.length * 500 + Math.floor(Math.random() * 2000);

    // Sort products (assuming they have price or createdAt)
    const topProducts = products
      .sort((a, b) => (b.price || 0) - (a.price || 0))
      .slice(0, 5);

    res.json({
      totalProducts: products.length,
      revenue,
      topProducts
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch analytics"
    });
  }
});

module.exports = router;