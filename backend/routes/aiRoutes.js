// const express = require("express");

// const router = express.Router();

// router.post("/generate-description", async(req,res)=>{

// try{

// const {title,category}=req.body;

// const descriptions=[

// `${title} is a premium ${category} product crafted with high quality materials.`,

// `Upgrade your lifestyle with ${title}. This ${category} product delivers comfort and efficiency.`,

// `${title} combines stylish design with powerful functionality.`,

// `Experience innovation with ${title}, designed for modern users.`,

// `${title} offers excellent performance and long-lasting quality.`

// ];

// const captions=[

// `🔥 Trending now: ${title}`,

// `✨ Upgrade your experience with ${title}`,

// `🚀 Discover premium quality with ${title}`,

// `⭐ Customer favorite product`,

// `💥 Best choice for smart buyers`

// ];

// const randomDescription =
// descriptions[Math.floor(Math.random()*descriptions.length)];

// const randomCaption =
// captions[Math.floor(Math.random()*captions.length)];

// const tags=[

// title.toLowerCase(),
// category.toLowerCase(),
// "premium",
// "trending",
// "bestseller",
// "sale"

// ];

// res.json({

// description:randomDescription,
// caption:randomCaption,
// tags

// });

// }
// catch(error){

// console.log(error);

// res.status(500).json({
// message:"Generation failed"
// });

// }

// });

// module.exports = router;




const express = require("express");

const router = express.Router();

router.post("/generate-description", async(req,res)=>{

try{

const {title,category}=req.body;

const descriptions=[

`${title} is a premium ${category} product crafted with high quality materials.`,

`Upgrade your lifestyle with ${title}. This ${category} product delivers comfort and efficiency.`,

`${title} combines stylish design with powerful functionality.`,

`Experience innovation with ${title}, designed for modern users.`,

`${title} offers excellent performance and long-lasting quality.`

];

const captions=[

`🔥 Trending now: ${title}`,

`✨ Upgrade your experience with ${title}`,

`🚀 Discover premium quality with ${title}`,

`⭐ Customer favorite product`,

`💥 Best choice for smart buyers`

];

const randomDescription =
descriptions[Math.floor(Math.random()*descriptions.length)];

const randomCaption =
captions[Math.floor(Math.random()*captions.length)];

const tags=[

title.toLowerCase(),
category.toLowerCase(),
"premium",
"trending",
"bestseller",
"sale"

];

res.json({

description:randomDescription,
caption:randomCaption,
tags

});

}
catch(error){

console.log(error);

res.status(500).json({
message:"Generation failed"
});

}

});

module.exports = router; 