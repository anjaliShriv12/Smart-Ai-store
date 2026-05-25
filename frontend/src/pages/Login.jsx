import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import API from "../services/api";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const login=async()=>{

try{

const response=

await API.post(

"/auth/login",

{
email,
password
}

);

localStorage.setItem(
"token",
response.data.token
);

navigate("/dashboard");

}
catch(error){

console.log(error);

alert("Invalid Credentials");

}

};

return(

<div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">


{/* Background Glow */}

<div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-[150px] top-[-150px] left-[-150px] opacity-40"></div>

<div className="absolute w-[500px] h-[500px] bg-blue-700 rounded-full blur-[150px] bottom-[-150px] right-[-150px] opacity-40"></div>



<div className="relative z-10 flex w-[1200px] h-[650px] rounded-3xl overflow-hidden backdrop-blur-lg border border-gray-700 shadow-2xl">


{/* Left Side */}

<div className="w-1/2 bg-gradient-to-br from-purple-900 to-black p-16 text-white flex flex-col justify-center">

<div>

<h1 className="text-6xl font-bold leading-tight">

SmartStore AI

</h1>

<p className="mt-8 text-gray-300 text-lg">

AI powered ecommerce admin assistant for product management, smart analytics and business insights.

</p>

</div>


<div className="mt-12 space-y-6">

<div className="flex items-center gap-4">

<div className="bg-purple-600 p-3 rounded-xl">

🚀

</div>

<div>

AI Product Descriptions

</div>

</div>



<div className="flex items-center gap-4">

<div className="bg-blue-600 p-3 rounded-xl">

📊

</div>

<div>

Revenue Analytics

</div>

</div>



<div className="flex items-center gap-4">

<div className="bg-pink-600 p-3 rounded-xl">

💡

</div>

<div>

Smart AI Suggestions

</div>

</div>

</div>

</div>



{/* Right Side */}

<div className="w-1/2 bg-[#111827]/80 backdrop-blur-xl flex items-center justify-center">

<div className="w-[420px]">

<h2 className="text-white text-4xl font-bold mb-2">

Welcome Back

</h2>

<p className="text-gray-400 mb-8">

Login to continue

</p>


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
className="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl text-white font-bold hover:scale-105 transition"
onClick={login}
>

Login

</button>



<p className="text-gray-400 text-center mt-8">

Don't have an account?

<Link
to="/signup"
className="text-purple-400 ml-2 font-bold"
>

Signup

</Link>

</p>

</div>

</div>

</div>

</div>

)

}

export default Login;