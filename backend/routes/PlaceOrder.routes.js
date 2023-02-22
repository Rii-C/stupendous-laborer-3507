const express = require("express");
const { PlaceOrderModel } = require("../model/Placeorder.model");


const PlaceOrderRouter = express.Router();

PlaceOrderRouter.get("/", async (req, res) => {
  const user = req.body.user;
    try {
      const PlaceOrdersData = await PlaceOrderModel.find({ user });
      res.send(PlaceOrdersData);
    } catch (error) {
      res.send({ message: "Cannot get place orders", error: error.message });
    }
});

PlaceOrderRouter.post("/add", async (req, res) => {
  try {
    const PlaceOrdersData = new PlaceOrderModel(req.body);
    await PlaceOrdersData.save();
    res.send({ message: "Order has been placed successfully" });
  } catch (error) {
    res.send({ message: "Cannot place the order", error: error.message });
  }
});

PlaceOrderRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await PlaceOrderModel.findByIdAndDelete({_id:id});
      res.send({ message: "Order has been Canceled successfully" });
    } catch (error) {
      res.send({ message: "Cannot cancel the order", error: error.message });
    }
});

module.exports={PlaceOrderRouter};