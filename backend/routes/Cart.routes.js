const express = require("express");
const { CartModel } = require("../model/Cart.model");

const CartRouter = express.Router();

CartRouter.get("/", async (req, res) => {
  const user = req.body.user;
    try {
      const CartData = await CartModel.find({ user });
      res.send(CartData);
    } catch (error) {
      res.send({ message: "Cannot get cart products", error: error.message });
    }
});

CartRouter.post("/add", async (req, res) => {
  try {
    const CartData = new CartModel(req.body);
    await CartData.save();
    res.send({ message: "Product has been added successfully to the cart" });
  } catch (error) {
    res.send({ message: "Cannot add product to the cart", error: error.message });
  }
});

CartRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await CartModel.findByIdAndDelete({_id:id});
      res.send({ message: "Product has been deleted successfully from the cart" });
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