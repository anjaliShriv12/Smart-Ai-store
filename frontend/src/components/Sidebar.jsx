// import {Link} from "react-router-dom";

// function Sidebar(){

// return(

// <div className="w-[260px] min-h-screen bg-[#0f172a] text-white p-6 flex flex-col">

// <h1 className="text-3xl font-bold mb-10">

// SmartStore AI

// </h1>


// <nav className="flex flex-col gap-4">

// <Link
// to="/dashboard"
// className="p-3 rounded-lg hover:bg-[#1e293b] transition"
// >

// 📊 Dashboard

// </Link>


// <Link
// to="/products"
// className="p-3 rounded-lg hover:bg-[#1e293b] transition"
// >

// 📦 Products

// </Link>


// <Link
// to="/"
// className="p-3 rounded-lg hover:bg-red-600 transition mt-auto"
// >

// 🚪 Logout

// </Link>

// </nav>

// </div>

// )

// }

// export default Sidebar;

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Sidebar() {

const { theme, toggleTheme } = useTheme();

return(

<div
className={`

w-[260px]
min-h-screen
p-6
flex
flex-col
duration-500

${theme==="dark"

? "bg-[#0f172a] text-white border-r border-[#1e293b]"

: "bg-white text-black shadow-xl"}

`}
>

<h1
className={`

text-3xl
font-bold
mb-10

${theme==="dark"

? "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"

: "text-purple-600"}

`}
>

SmartStore AI

</h1>


<nav className="flex flex-col gap-4 flex-1">

<Link
to="/dashboard"
className={`

p-3
rounded-xl
font-medium
transition-all
duration-300

${theme==="dark"

? "hover:bg-[#1e293b] hover:translate-x-2"

: "hover:bg-gray-100 hover:translate-x-2"}

`}
>

📊 Dashboard

</Link>


<Link
to="/products"
className={`

p-3
rounded-xl
font-medium
transition-all
duration-300

${theme==="dark"

? "hover:bg-[#1e293b] hover:translate-x-2"

: "hover:bg-gray-100 hover:translate-x-2"}

`}
>

📦 Products

</Link>


<button

onClick={toggleTheme}

className="mt-4 p-3 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all duration-300"

>

{theme==="dark"

? "☀ Light Mode"

: "🌙 Dark Mode"}

</button>


<Link
to="/"
className="mt-auto p-3 rounded-xl bg-red-600 hover:bg-red-700 transition-all duration-300"
>

🚪 Logout

</Link>

</nav>

</div>

)

}

export default Sidebar;