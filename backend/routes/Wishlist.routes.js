const express = require("express");
const { WishlistModel } = require("../model/Wishlist.model");

const WishlistRouter = express.Router();

WishlistRouter.get("/", async (req, res) => {
  const user = req.body.user;
    try {
      const WishlistData = await WishlistModel.find({ user });
      res.send(WishlistData);
    } catch (error) {
      res.send({ message: "Cannot get wishlist products", error: error.message });
    }
});

WishlistRouter.post("/add", async (req, res) => {
  try {
    const WishlistData = new WishlistModel(req.body);
    await WishlistData.save();
    res.send({ message: "Product has been added successfully to the wishlist" });
  } catch (error) {
    res.send({ message: "Cannot add product to the wishlist", error: error.message });
  }
});

WishlistRouter.delete("/delete/:id", async (req, res) => {
  const id=req.params.id;
  try {
    await WishlistModel.findByIdAndDelete({_id:id});
    
    res.send({ message: "Product has been deleted successfully from the wishlist" });
  } catch (error) {
    res.send({ message: "Cannot delete the product from the wishlist", error: error.message });
  }
});

module.exports={WishlistRouter};