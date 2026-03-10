const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./connection");
const authRoutes = require("./routes/authRoutes");
const listingRoutes = require("./routes/listingRoutes");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//db connection
connectDb(process.env.DB_URL);

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);

app.get("/", (req,res)=>{
    res.send("Hello World!");
});

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
});