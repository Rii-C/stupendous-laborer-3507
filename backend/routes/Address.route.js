const express = require("express");
const AddressModel = require("../model/Adrress.model");

const AddressRouter = express.Router();

AddressRouter.get("/", async (req, res) => {
  const user = req.body.user;
  console.log(user)
    try {
      const userAddress = await AddressModel.find({ user });
      res.send(userAddress);
    } catch (error) {
      res.send({ message: "Cannot get users address", error: error.message });
    }
});

AddressRouter.post("/add", async (req, res) => {
  try {
    const userAddress = new AddressModel(req.body);
    await userAddress.save();
    res.send({ message: "Address has been added successfully" });
  } catch (error) {
    res.send({ message: "Cannot add Address", error: error.message });
  }
});

AddressRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await AddressModel.findByIdAndDelete({_id:id});
    res.send({ message: "Address has been deleted successfully from the db" });
  } catch (error) {
    res.send({ message: "Cannot delete the Address from the cart", error: error.message });
  }
});

module.exports={AddressRouter}