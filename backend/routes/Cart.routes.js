const express = require("express");
const { CartModel } = require("../model/Cart.model");

const CartRouter = express.Router();

CartRouter.get("/", async (req, res) => {
  const user = req.body.user;
    try {
      const CartCount= await CartModel.countDocuments();
      const CartData = await CartModel.find({ user });
      res.send({CartData,CartCount});
    } catch (error) {
      res.send({ message: "Cannot get cart products", error: error.message });
    }
});

CartRouter.post("/add", async (req, res) => {
  try {
    let name = req.body.name
    let product = await CartModel.findOne({name})
    
    if(product){
      product.quantity = product.quantity+req.body.quantity
      
await CartModel.findByIdAndUpdate({_id:product["_id"]},product)
    }
    else{  
      const CartData = new CartModel(req.body);
      await CartData.save();
    }
    res.send({ message: "Product has been added successfully to the cart" });

  } catch (error) {
    res.send({ message: "Cannot add product to the cart", error: error.message });
  }
});

CartRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    
    try {
     const data= await CartModel.findByIdAndDelete({_id:id});
     console.log(data)
      res.send({ message: "Product has been deleted successfully from the cart" });
    } catch (error) {
      res.send({ message: "Cannot delete the product from the cart", error: error.message });
    }
});

CartRouter.delete("/deleteAll/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id)

  
  try {
    await CartModel.deleteMany({user:id});
    res.send({ message: "Product has been deleted successfully in the cart" });
  } catch (error) {
    res.send({ message: "Cannot delete the product from the cart", error: error.message });
  }
 });




CartRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
 
  const payload=req.body
  try {
    await CartModel.findByIdAndUpdate({_id:id},payload);
    res.send({ message: "Product has been updated successfully from the cart" });
  } catch (error) {
    res.send({ message: "Cannot delete the product from the cart", error: error.message });
  }
});


module.exports={CartRouter};