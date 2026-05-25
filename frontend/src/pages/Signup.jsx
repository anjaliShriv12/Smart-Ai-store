import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import API from "../services/api";

function Signup(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const signup=async()=>{

try{

await API.post(

"/auth/signup",

{
name,
email,
password
}

);

alert("Signup successful");

navigate("/");

}
catch(error){

console.log(error);

alert("Signup failed");

}

};

return(

<div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">


{/* Background Glow */}

<div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-[150px] top-[-150px] left-[-150px] opacity-40"></div>

<div className="absolute w-[500px] h-[500px] bg-pink-700 rounded-full blur-[150px] bottom-[-150px] right-[-150px] opacity-40"></div>



<div className="relative z-10 flex w-[1200px] h-[650px] rounded-3xl overflow-hidden backdrop-blur-lg border border-gray-700 shadow-2xl">


{/* Left Side */}

<div className="w-1/2 bg-gradient-to-br from-purple-900 to-black p-16 text-white flex flex-col justify-center">

<div>

<h1 className="text-6xl font-bold">

Join SmartStore AI

</h1>

<p className="mt-8 text-gray-300 text-lg">

Create your account and manage products with AI-powered descriptions, analytics and smart business insights.

</p>

</div>


<div className="mt-12 space-y-6">

<div className="flex items-center gap-4">

<div className="bg-purple-600 p-3 rounded-xl">

🤖

</div>

<div>

AI Product Management

</div>

</div>


<div className="flex items-center gap-4">

<div className="bg-blue-600 p-3 rounded-xl">

📈

</div>

<div>

Business Analytics

</div>

</div>


<div className="flex items-center gap-4">

<div className="bg-pink-600 p-3 rounded-xl">

✨

</div>

<div>

Smart Growth Insights

</div>

</div>

</div>

</div>



{/* Right Side */}

<div className="w-1/2 bg-[#111827]/80 backdrop-blur-xl flex items-center justify-center">

<div className="w-[420px]">

<h2 className="text-white text-4xl font-bold mb-2">

Create Account

</h2>

<p className="text-gray-400 mb-8">

Start your AI journey

</p>


<input
className="w-full bg-[#1f2937] text-white p-4 rounded-xl mb-4 outline-none border border-gray-700 focus:border-purple-500"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>


<input
className="w-full bg-[#1f2937] text-white p-4 rounded-xl mb-4 outline-none border border-gray-700 focus:border-purple-500"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
className="w-full bg-[#1f2937] text-white p-4 rounded-xl mb-6 outline-none border border-gray-700 focus:border-purple-500"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>



<button
className="w-full bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl text-white font-bold hover:scale-105 transition"
onClick={signup}
>

Create Account

</button>


<p className="text-gray-400 text-center mt-8">

Already have an account?

<Link
to="/"
className="text-purple-400 ml-2 font-bold"
>

Login

</Link>

</p>

</div>

</div>

</div>

</div>

)

}

export default Signup;