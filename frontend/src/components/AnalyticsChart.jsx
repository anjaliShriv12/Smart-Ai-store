import {

Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Tooltip,
Legend

} from "chart.js";

import {Bar} from "react-chartjs-2";

ChartJS.register(

CategoryScale,
LinearScale,
BarElement,
Tooltip,
Legend

);

function AnalyticsChart(){

const data={

labels:["Jan","Feb","Mar"],

datasets:[

{

label:"Revenue",

data:[1000,2500,5000],

backgroundColor:[

"#8B5CF6",
"#3B82F6",
"#EC4899"

],

borderRadius:10

}

]

};

const options={

responsive:true,

maintainAspectRatio:false

};

return(

<div className="h-[250px]">

<Bar
data={data}
options={options}
/>

</div>

)

}

export default AnalyticsChart;