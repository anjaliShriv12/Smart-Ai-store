import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

function Profile(){

const {theme}=useTheme();

const [name,setName]=useState("Admin");
const [email,setEmail]=useState("admin@gmail.com");
const [password,setPassword]=useState("");

const saveProfile=()=>{

alert("Profile Updated");

};

return(

<div className={`flex min-h-screen duration-500

${theme==="dark"
?"bg-[#09090f] text-white"
:"bg-gray-100 text-black"}

`}>

<Sidebar/>

<div className="flex-1 p-10">

<h1 className="text-5xl font-bold mb-8">

My Profile

</h1>


<div className={`

max-w-[700px]
p-10
rounded-[30px]
backdrop-blur-xl

${theme==="dark"

?"bg-[#111827]/70 border border-gray-700"

:"bg-white shadow-xl"}

`}>

<div className="flex justify-center">

<div className="w-[120px] h-[120px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-5xl">

👤

</div>

</div>


<div className="mt-8">

<label>Name</label>

<input
className="w-full p-4 rounded-xl mt-2 bg-gray-200 text-black"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

</div>


<div className="mt-5">

<label>Email</label>

<input
className="w-full p-4 rounded-xl mt-2 bg-gray-200 text-black"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

</div>


<div className="mt-5">

<label>Change Password</label>

<input
type="password"
className="w-full p-4 rounded-xl mt-2 bg-gray-200 text-black"
placeholder="New Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

</div>


<button
onClick={saveProfile}
className="mt-8 w-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl font-bold"
>

Save Changes

</button>

</div>

</div>

</div>

)

}

export default Profile;