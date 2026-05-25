import { useState, useEffect } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

function Products() {

const [title,setTitle]=useState("");
const [category,setCategory]=useState("");
const [price,setPrice]=useState("");
const [stock,setStock]=useState("");

const [products,setProducts]=useState([]);

const [description,setDescription]=useState("");
const [caption,setCaption]=useState("");
const [tags,setTags]=useState([]);

const [editingId,setEditingId]=useState(null);

const {theme}=useTheme();


// Load products
const loadProducts=async()=>{

try{

const response=await API.get("/products");

setProducts(response.data);

}
catch(error){

console.log(error);

}

};



useEffect(()=>{

loadProducts();

},[]);



// AI generate
const generateDescription=async()=>{

try{

const response=await API.post(

"/ai/generate-description",

{
title,
category
}

);

setDescription(response.data.description);

setCaption(response.data.caption);

setTags(response.data.tags);

}
catch(error){

console.log(error);

}

};




// Add / Update product

const addOrUpdateProduct=async()=>{

try{

const productData={

title,
category,
price,
stock,
description,
caption,
tags

};


if(editingId){

await API.put(

`/products/${editingId}`,
productData

);

setEditingId(null);

}
else{

await API.post(
"/products/add",
productData
);

}


loadProducts();


// reset

setTitle("");
setCategory("");
setPrice("");
setStock("");

setDescription("");
setCaption("");
setTags([]);

}
catch(error){

console.log(error);

}

};



return(

<div className={`

flex
min-h-screen
duration-500

${theme==="dark"
? "bg-[#09090f] text-white"
: "bg-gray-100 text-black"}

`}>

<Sidebar/>

<div className="flex-1 p-8 relative">


{/* Dark mode glow */}

{

theme==="dark" &&

<>

<div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[180px] opacity-20 top-[-100px] left-[300px]"></div>

<div className="absolute w-[400px] h-[400px] bg-pink-600 blur-[180px] opacity-20 bottom-0 right-0"></div>

</>

}



<div className="relative z-10">


<h1 className="text-5xl font-bold">

Products

</h1>

<p className={`mt-2

${theme==="dark"
? "text-gray-400"
: "text-gray-600"}

`}>

Manage your AI generated products

</p>



{/* Form */}

<div className={`

mt-8
p-8
rounded-[30px]
border
backdrop-blur-xl

${theme==="dark"

? "bg-[#15151d]/80 border-gray-800"

: "bg-white border-gray-200 shadow-xl"}

`}>



<div className="grid grid-cols-4 gap-4">


{/* Title */}

<input

type="text"

className={`

w-full
p-4
rounded-xl
outline-none
border
transition-all

${theme==="dark"

? "bg-[#1e293b] text-white caret-white border-gray-700 placeholder:text-gray-400 focus:border-purple-500"

: "bg-gray-100 text-black caret-black border-gray-300 placeholder:text-gray-500 focus:border-blue-500"}

`}

placeholder="Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

/>



{/* Category */}

<input

type="text"

className={`

w-full
p-4
rounded-xl
outline-none
border
transition-all

${theme==="dark"

? "bg-[#1e293b] text-white caret-white border-gray-700 placeholder:text-gray-400 focus:border-purple-500"

: "bg-gray-100 text-black caret-black border-gray-300 placeholder:text-gray-500 focus:border-blue-500"}

`}

placeholder="Category"

value={category}

onChange={(e)=>setCategory(e.target.value)}

/>



{/* Price */}

<input

type="number"

className={`

w-full
p-4
rounded-xl
outline-none
border
transition-all

${theme==="dark"

? "bg-[#1e293b] text-white caret-white border-gray-700 placeholder:text-gray-400 focus:border-purple-500"

: "bg-gray-100 text-black caret-black border-gray-300 placeholder:text-gray-500 focus:border-blue-500"}

`}

placeholder="Price"

value={price}

onChange={(e)=>setPrice(e.target.value)}

/>



{/* Stock */}

<input

type="number"

className={`

w-full
p-4
rounded-xl
outline-none
border
transition-all

${theme==="dark"

? "bg-[#1e293b] text-white caret-white border-gray-700 placeholder:text-gray-400 focus:border-purple-500"

: "bg-gray-100 text-black caret-black border-gray-300 placeholder:text-gray-500 focus:border-blue-500"}

`}

placeholder="Stock"

value={stock}

onChange={(e)=>setStock(e.target.value)}

/>

</div>



<button

className="mt-5 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-2xl font-bold hover:scale-105 duration-300"

onClick={generateDescription}

>

Generate AI Content

</button>




<div className={`

p-5
rounded-2xl
mt-6

${theme==="dark"
? "bg-[#1e293b]"
: "bg-gray-100"}

`}>

<h3 className="font-bold">

Description

</h3>

<p className="mt-2">

{description}

</p>

</div>




<div className="mt-5">

<h3 className="font-bold">

Marketing Caption

</h3>

<p className="text-purple-500 mt-2">

{caption}

</p>

</div>



<div className="mt-5">

<h3 className="font-bold">

SEO Tags

</h3>

<div className="flex gap-2 mt-3 flex-wrap">

{

tags.map((tag,index)=>(

<div
key={index}
className="bg-purple-600 px-3 py-2 rounded-full text-white"
>

#{tag}

</div>

))

}

</div>

</div>



<button

className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 duration-300"

onClick={addOrUpdateProduct}

>

{editingId
? "Update Product"
: "Add Product"}

</button>

</div>




{/* Products */}

<div className="grid grid-cols-3 gap-6 mt-8">

{

products.map((product)=>(

<ProductCard
key={product._id}
product={product}
setEditingId={setEditingId}
setTitle={setTitle}
setCategory={setCategory}
setPrice={setPrice}
setStock={setStock}
setDescription={setDescription}
setCaption={setCaption}
setTags={setTags}
/>

))

}

</div>

</div>

</div>

</div>

)

}

export default Products;



