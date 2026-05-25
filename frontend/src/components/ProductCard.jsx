import API from "../services/api";
import { useTheme } from "../context/ThemeContext";

function ProductCard({
product,
setEditingId,
setTitle,
setCategory,
setPrice,
setStock,
setDescription,
setCaption,
setTags
}){

const {theme}=useTheme();

const deleteProduct=async()=>{

try{

await API.delete(
`/products/${product._id}`
);

window.location.reload();

}
catch(error){

console.log(error);

}

};



const editProduct=()=>{

setEditingId(
product._id
);

setTitle(
product.title
);

setCategory(
product.category
);

setPrice(
product.price
);

setStock(
product.stock
);

setDescription(
product.description
);

setCaption(
product.caption
);

setTags(
product.tags || []
);

window.scrollTo({

top:0,
behavior:"smooth"

});

};



return(

<div

className={`

backdrop-blur-xl
border
rounded-[25px]
p-6
transition-all
duration-500
hover:scale-[1.03]

${theme==="dark"

? `bg-[#111827]/80
border-gray-800
shadow-[0_0_30px_rgba(168,85,247,.15)]
hover:shadow-[0_0_50px_rgba(236,72,153,.4)]`

: `bg-white
border-gray-200
shadow-xl
hover:shadow-2xl`

}

`}

>

<h2

className={`

text-2xl
font-bold

${theme==="dark"

? "text-white"

: "text-black"}

`}

>

{product.title}

</h2>




<p

className={`mt-3

${theme==="dark"

? "text-gray-400"

: "text-gray-600"}

`}

>

Category:

<span className="text-cyan-500 ml-2">

{product.category}

</span>

</p>




<p

className={`mt-2

${theme==="dark"

? "text-gray-400"

: "text-gray-600"}

`}

>

Price:

<span className="text-green-500 ml-2">

₹{product.price}

</span>

</p>




<p

className={`mt-2

${theme==="dark"

? "text-gray-400"

: "text-gray-600"}

`}

>

Stock:

<span className="text-purple-500 ml-2">

{product.stock}

</span>

</p>




<p

className={`

mt-4
text-sm
leading-7

${theme==="dark"

? "text-gray-300"

: "text-gray-700"}

`}

>

{product.description}

</p>





{

product.caption && (

<div className="mt-4">

<p className="text-pink-500 font-bold">

Caption

</p>

<p

className={`

${theme==="dark"

? "text-gray-300"

: "text-gray-700"}

`}

>

{product.caption}

</p>

</div>

)

}




<div className="flex flex-wrap gap-2 mt-4">

{

product.tags?.map((tag,index)=>(

<div
key={index}
className="bg-purple-600/30 text-purple-500 px-3 py-1 rounded-full text-sm"
>

#{tag}

</div>

))

}

</div>




<div className="flex gap-3 mt-6">

<button
onClick={editProduct}
className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 py-3 rounded-xl font-bold hover:scale-105 duration-300"
>

Update

</button>


<button
onClick={deleteProduct}
className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 py-3 rounded-xl font-bold hover:scale-105 duration-300"
>

Delete

</button>

</div>

</div>

)

}

export default ProductCard;