const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();


// Middleware

app.use(cors());
app.use(express.json());


// Routes

app.use(
"/api/auth",
require("./routes/authRoutes")
);

app.use(
"/api/products",
require("./routes/productRoutes")
);

app.use(
"/api/ai",
require("./routes/aiRoutes")
);

app.use(
"/api/analytics",
require("./routes/analyticsRoutes")
);

app.use(
"/api/suggestions",
require("./routes/suggestionRoutes")
);

app.use(
"/api/insights",
require("./routes/insightRoutes")
);


// Database connection

mongoose.connect(
process.env.MONGO_URL
)

.then(()=>{

console.log(
"MongoDB Connected"
);

})

.catch((err)=>{

console.log(err);

});


// Server

const PORT=5000;

app.listen(PORT,()=>{

console.log(
`Server running on ${PORT}`
);

});