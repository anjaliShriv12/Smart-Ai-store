// import { useEffect, useState } from "react";
// import API from "../services/api";
// import AnalyticsChart from "../components/AnalyticsChart";
// import Sidebar from "../components/Sidebar";
// import { useTheme } from "../context/ThemeContext";

// function Dashboard() {

// const [revenue,setRevenue]=useState(0);
// const [topProducts,setTopProducts]=useState([]);
// const [suggestions,setSuggestions]=useState([]);
// const [insights,setInsights]=useState([]);

// const {theme}=useTheme();


// const loadData=async()=>{

// try{

// const analytics=
// await API.get("/analytics");

// setRevenue(
// analytics.data.revenue
// );

// setTopProducts(
// analytics.data.topProducts
// );

// const suggest=
// await API.get("/suggestions");

// setSuggestions(
// suggest.data
// );

// const insight=
// await API.get("/insights");

// setInsights(
// insight.data
// );

// }
// catch(error){

// console.log(error);

// }

// };


// useEffect(()=>{

// loadData();

// },[]);



// return(

// <div

// className={`

// flex
// min-h-screen
// overflow-hidden
// duration-500

// ${theme==="dark"

// ? "bg-[#09090f] text-white"

// : "bg-gray-100 text-black"}

// `}

// >

// <Sidebar/>


// <div className="flex-1 relative p-8 overflow-auto">


// {/* Background Glow only in dark */}

// {

// theme==="dark" &&

// <>

// <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[180px] opacity-20 top-[-150px] left-[250px]"></div>

// <div className="absolute w-[400px] h-[400px] bg-pink-600 blur-[180px] opacity-20 bottom-0 right-0"></div>

// </>

// }


// <div className="relative z-10">


// {/* Header */}

// <div className="flex justify-between items-center">

// <div>

// <h1 className="text-5xl font-bold">

// Dashboard

// </h1>

// <p className={`mt-2

// ${theme==="dark"

// ? "text-gray-400"

// : "text-gray-600"}

// `}>

// Monitor products and AI insights

// </p>

// </div>


// <div

// className={`

// px-6
// py-3
// rounded-full

// ${theme==="dark"

// ? "bg-[#15151d] border border-purple-500"

// : "bg-white shadow-xl"}

// `}

// >

// 👤 Admin

// </div>

// </div>




// {/* CARDS */}

// <div className="grid grid-cols-3 gap-6 mt-10">


// <div className="group">

// <div className="
// bg-gradient-to-br
// from-purple-600
// to-blue-500
// rounded-[30px]
// p-6
// transition-all
// duration-500
// hover:scale-105
// hover:-translate-y-3
// shadow-[0_20px_60px_rgba(168,85,247,.6)]
// ">

// <p className="opacity-80">

// Revenue

// </p>

// <h1 className="text-5xl font-bold mt-4">

// ₹{revenue}

// </h1>

// </div>

// </div>




// <div className="group">

// <div className="
// bg-gradient-to-br
// from-cyan-500
// to-blue-500
// rounded-[30px]
// p-6
// transition-all
// duration-500
// hover:scale-105
// hover:-translate-y-3
// shadow-[0_20px_60px_rgba(6,182,212,.6)]
// ">

// <p className="opacity-80">

// Products

// </p>

// <h1 className="text-5xl font-bold mt-4">

// {topProducts.length}

// </h1>

// </div>

// </div>




// <div className="group">

// <div className="
// bg-gradient-to-br
// from-pink-500
// to-red-500
// rounded-[30px]
// p-6
// transition-all
// duration-500
// hover:scale-105
// hover:-translate-y-3
// shadow-[0_20px_60px_rgba(236,72,153,.6)]
// ">

// <p className="opacity-80">

// Suggestions

// </p>

// <h1 className="text-5xl font-bold mt-4">

// {suggestions.length}

// </h1>

// </div>

// </div>

// </div>





// {/* Analytics */}

// <div className="grid grid-cols-3 gap-6 mt-8">


// <div

// className={`

// col-span-2
// rounded-[30px]
// p-6
// border

// ${theme==="dark"

// ? "bg-[#15151d]/80 border-gray-800"

// : "bg-white border-gray-200 shadow-xl"}

// `}

// >

// <h2 className="text-xl mb-5">

// Revenue Analytics

// </h2>

// <AnalyticsChart/>

// </div>



// <div

// className={`

// rounded-[30px]
// p-6
// border

// ${theme==="dark"

// ? "bg-[#15151d]/80 border-gray-800"

// : "bg-white border-gray-200 shadow-xl"}

// `}

// >

// <h2 className="mb-5">

// 🔥 Top Products

// </h2>

// {

// topProducts.map((p)=>(

// <div
// key={p._id}

// className={`

// p-4
// rounded-2xl
// mb-3

// ${theme==="dark"

// ? "bg-[#1e293b]"

// : "bg-gray-100"}

// `}

// >

// {p.title}

// </div>

// ))

// }

// </div>

// </div>






// <div className="grid grid-cols-2 gap-6 mt-8">


// <div

// className={`

// rounded-[30px]
// p-6
// border

// ${theme==="dark"

// ? "bg-[#15151d]/80 border-gray-800"

// : "bg-white border-gray-200 shadow-xl"}

// `}

// >

// <h2 className="mb-5">

// 💡 AI Suggestions

// </h2>

// {

// suggestions.map((item,index)=>(

// <div
// key={index}

// className={`

// p-4
// rounded-2xl
// mb-3

// ${theme==="dark"

// ? "bg-[#1e293b]"

// : "bg-gray-100"}

// `}

// >

// {item.suggestion}

// </div>

// ))

// }

// </div>





// <div

// className={`

// rounded-[30px]
// p-6
// border

// ${theme==="dark"

// ? "bg-[#15151d]/80 border-gray-800"

// : "bg-white border-gray-200 shadow-xl"}

// `}

// >

// <h2 className="mb-5">

// 📈 Trends

// </h2>

// {

// insights.map((item,index)=>(

// <div
// key={index}

// className={`

// p-4
// rounded-2xl
// mb-3

// ${theme==="dark"

// ? "bg-[#1e293b]"

// : "bg-gray-100"}

// `}

// >

// <p>

// {item.pricingAdvice}

// </p>

// <p className="text-green-500 mt-2">

// {item.trend}

// </p>

// </div>

// ))

// }

// </div>

// </div>

// </div>

// </div>

// </div>

// )

// }

// export default Dashboard;











import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import AnalyticsChart from "../components/AnalyticsChart";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

function Dashboard() {

const [revenue,setRevenue]=useState(0);
const [topProducts,setTopProducts]=useState([]);
const [suggestions,setSuggestions]=useState([]);
const [insights,setInsights]=useState([]);

const {theme}=useTheme();

const loadData=async()=>{

try{

const analytics=
await API.get("/analytics");

setRevenue(
analytics.data.revenue
);

setTopProducts(
analytics.data.topProducts
);

const suggest=
await API.get("/suggestions");

setSuggestions(
suggest.data
);

const insight=
await API.get("/insights");

setInsights(
insight.data
);

}
catch(error){

console.log(error);

}

};

useEffect(()=>{

loadData();

},[]);

return(

<div

className={`

flex
min-h-screen
overflow-hidden
duration-500

${theme==="dark"

? "bg-[#09090f] text-white"

: "bg-gray-100 text-black"}

`}

>

<Sidebar/>

<div className="flex-1 relative p-8 overflow-auto">


{/* Glow */}

{

theme==="dark" &&

<>

<div className="absolute pointer-events-none w-[500px] h-[500px] bg-purple-600 blur-[180px] opacity-20 top-[-150px] left-[250px]"></div>

<div className="absolute pointer-events-none w-[400px] h-[400px] bg-pink-600 blur-[180px] opacity-20 bottom-0 right-0"></div>

</>

}


<div className="relative z-10">


{/* Header */}

<div className="flex justify-between items-center">

<div>

<h1 className="text-5xl font-bold">

Dashboard

</h1>

<p

className={`mt-2

${theme==="dark"

? "text-gray-400"

: "text-gray-600"}

`}

>

Monitor products and AI insights

</p>

</div>



<Link

to="/profile"

className={`

relative
z-[999]
px-6
py-3
rounded-full
cursor-pointer
hover:scale-105
duration-300

${theme==="dark"

? "bg-[#15151d] border border-purple-500 hover:bg-purple-600"

: "bg-white shadow-xl hover:bg-gray-100"}

`}

>

👤 Admin

</Link>

</div>




{/* CARDS */}

<div className="grid grid-cols-3 gap-6 mt-10">


<div className="group">

<div className="
bg-gradient-to-br
from-purple-600
to-blue-500
rounded-[30px]
p-6
transition-all
duration-500
hover:scale-105
hover:-translate-y-3
shadow-[0_20px_60px_rgba(168,85,247,.6)]
">

<p className="opacity-80">

Revenue

</p>

<h1 className="text-5xl font-bold mt-4">

₹{revenue}

</h1>

</div>

</div>




<div className="group">

<div className="
bg-gradient-to-br
from-cyan-500
to-blue-500
rounded-[30px]
p-6
transition-all
duration-500
hover:scale-105
hover:-translate-y-3
shadow-[0_20px_60px_rgba(6,182,212,.6)]
">

<p className="opacity-80">

Products

</p>

<h1 className="text-5xl font-bold mt-4">

{topProducts.length}

</h1>

</div>

</div>




<div className="group">

<div className="
bg-gradient-to-br
from-pink-500
to-red-500
rounded-[30px]
p-6
transition-all
duration-500
hover:scale-105
hover:-translate-y-3
shadow-[0_20px_60px_rgba(236,72,153,.6)]
">

<p className="opacity-80">

Suggestions

</p>

<h1 className="text-5xl font-bold mt-4">

{suggestions.length}

</h1>

</div>

</div>

</div>




{/* Analytics */}

<div className="grid grid-cols-3 gap-6 mt-8">


<div
className={`

col-span-2
rounded-[30px]
p-6
border

${theme==="dark"

? "bg-[#15151d]/80 border-gray-800"

: "bg-white border-gray-200 shadow-xl"}

`}
>

<h2 className="text-xl mb-5">

Revenue Analytics

</h2>

<AnalyticsChart/>

</div>



<div
className={`

rounded-[30px]
p-6
border

${theme==="dark"

? "bg-[#15151d]/80 border-gray-800"

: "bg-white border-gray-200 shadow-xl"}

`}
>

<h2 className="mb-5">

🔥 Top Products

</h2>

{

topProducts.map((p)=>(

<div
key={p._id}

className={`

p-4
rounded-2xl
mb-3

${theme==="dark"

? "bg-[#1e293b]"

: "bg-gray-100"}

`}
>

{p.title}

</div>

))

}

</div>

</div>




<div className="grid grid-cols-2 gap-6 mt-8">


<div
className={`

rounded-[30px]
p-6
border

${theme==="dark"

? "bg-[#15151d]/80 border-gray-800"

: "bg-white border-gray-200 shadow-xl"}

`}
>

<h2 className="mb-5">

💡 AI Suggestions

</h2>

{

suggestions.map((item,index)=>(

<div
key={index}

className={`

p-4
rounded-2xl
mb-3

${theme==="dark"

? "bg-[#1e293b]"

: "bg-gray-100"}

`}
>

{item.suggestion}

</div>

))

}

</div>



<div
className={`

rounded-[30px]
p-6
border

${theme==="dark"

? "bg-[#15151d]/80 border-gray-800"

: "bg-white border-gray-200 shadow-xl"}

`}
>

<h2 className="mb-5">

📈 Trends

</h2>

{

insights.map((item,index)=>(

<div
key={index}

className={`

p-4
rounded-2xl
mb-3

${theme==="dark"

? "bg-[#1e293b]"

: "bg-gray-100"}

`}
>

<p>{item.pricingAdvice}</p>

<p className="text-green-500 mt-2">

{item.trend}

</p>

</div>

))

}

</div>

</div>

</div>

</div>

</div>

)

}

export default Dashboard;