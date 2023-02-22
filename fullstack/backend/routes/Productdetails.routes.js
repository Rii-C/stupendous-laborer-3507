const express = require("express");
const { ProductDetailModel } = require("../model/Productdetails.model");


const ProductDetailRouter = express.Router();

ProductDetailRouter.get("/", async (req, res) => {
  const user = req.body.user;
    try {
      const ProductDetailData = await ProductDetailModel.find({ user });
      res.send(ProductDetailData);
    } catch (error) {
      res.send({ message: "Cannot get wishlist products", error: error.message });
    }
});

ProductDetailRouter.post("/add", async (req, res) => {
  try {
    const ProductDetailData = new ProductDetailModel(req.body);
    await ProductDetailData.save();
    res.send({ message: "Product has been added successfully to the wishlist" });
  } catch (error) {
    res.send({ message: "Cannot add product to the wishlist", error: error.message });
  }
});

module.exports={ProductDetailRouter};