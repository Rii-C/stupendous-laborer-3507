const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
  res.send("This is Home Page")
})


app.listen(process.env.port,async()=>{
    try {
     await connection;
      console.log("Conneted to HealthKart Database successfully");   
    } catch (error) {
      console.log(error);  
    }
    console.log(`Server running at port ${process.env.port}`);
})

