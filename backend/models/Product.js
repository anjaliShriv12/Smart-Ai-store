// const mongoose=require("mongoose");

// const productSchema=new mongoose.Schema({

// title:String,

// category:String,

// price:Number,

// stock:Number,

// description:String,

// caption:String,

// tags:[String],

// sales:{
// type:Number,
// default:10
// }

// });

// module.exports=
// mongoose.model(
// "Product",
// productSchema
// );



const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({

title:String,

category:String,

price:Number,

stock:Number,

description:String,

caption:String,

tags:[String],

sales:{
type:Number,
default:20
}

});

module.exports=
mongoose.model(
"Product",
productSchema
);