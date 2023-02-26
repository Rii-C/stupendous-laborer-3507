const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const { UserRouter } = require("./routes/User.routes");
const { CartRouter } = require("./routes/Cart.routes");
const { authorization } = require("./middleware/auth.middleware");
const { WishlistRouter } = require("./routes/Wishlist.routes");
const { ProductRouter } = require("./routes/Product.routes");
const {AddressRouter} =require("./routes/Address.route")

const cors = require("cors");
const { ProductDetailRouter } = require("./routes/Productdetails.routes");
const { PlaceOrderRouter } = require("./routes/PlaceOrder.routes");
const { TotalPlaceOrderRouter } = require("./routes/TotalPlacedOrder.routes");
const { TotalRouter } = require("./routes/total.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
  res.send("This is Home Page")
})

app.use("/user",UserRouter);

app.use("/product",ProductRouter);

app.use("/total/product",TotalRouter);

app.use("/total/place/order",TotalPlaceOrderRouter);

app.use("/cart",authorization,CartRouter);

app.use("/address",authorization,AddressRouter)

app.use("/wishlist",authorization,WishlistRouter);

app.use("/product/detail",authorization,ProductDetailRouter);

app.use("/place/order",authorization,PlaceOrderRouter);

app.listen(process.env.port,async()=>{
    try {
     await connection;
      console.log("Conneted to HealthKart Database successfully");   
    } catch (error) {
      console.log(error);  
    }
    console.log(`Server running at port ${process.env.port}`);
})

