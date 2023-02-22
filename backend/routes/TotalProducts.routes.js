const express = require("express");
const { ProductModel } = require("../model/Product.model");

const TotalProductsRouter = express.Router();

TotalProductsRouter.get("/", async (req, res) => {
  if (req.query.category) {
    try {
      const TotalProductsData = await ProductModel.find({
        category: { $regex: `${req.query.category}`, $options: "i" },
      });
      res.send(TotalProductsData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.category} catgory of products`,
        error: error.message,
      });
    }
  } else if (req.query.name) {
    try {
      const TotalProductsData = await ProductModel.find({
        name: { $regex: `${req.query.name}`, $options: "i" },
      });
      res.send(TotalProductsData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.name} name of products`,
        error: error.message,
      });
    }
  } else if (req.query.flavour) {
    try {
      const TotalProductsData = await ProductModel.find({
        flavour: { $regex: `${req.query.flavour}`, $options: "i" },
      });
      res.send(TotalProductsData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.name} name of products`,
        error: error.message,
      });
    }
  } else if (req.query.discount) {
    try {
      const TotalProductsData = await ProductModel.find().sort({
        discount: `${req.query.discount}`,
      });
      res.send(TotalProductsData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.price) {
    try {
      const TotalProductsData = await ProductModel.find().sort({
        price: `${req.query.price}`,
      });
      res.send(TotalProductsData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.rating) {
    try {
      const TotalProductsData = await ProductModel.find().sort({
        rating: `${req.query.rating}`,
      });
      res.send(TotalProductsData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.reviews) {
    try {
      const TotalProductsData = await ProductModel.find().sort({
        reviews: `${req.query.reviews}`,
      });
      res.send(TotalProductsData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  }else if (req.query.page && req.query.limit) {
    const page = req.query.page;
    const limit = req.query.limit;
    try {
      const TotalProductsData = await ProductModel.find().skip(page*limit-limit).limit(limit);
      res.send(TotalProductsData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else {
    try {
      const TotalProductsData = await ProductModel.find();
      res.send(TotalProductsData);
    } catch (error) {
      res.send({ message: "Cannot get posts", error: error.message });
    }
  }
});


TotalProductsRouter.post("/add", async (req, res) => {
  try {
    const TotalProductsData = new TotalPlaceOrderModel(req.body);
    await TotalProductsData.save();
    res.send({ message: "Order has been added successfully to the total place order's database" });
  } catch (error) {
    res.send({ message: "Cannot add the place order to the total place order's database", error: error.message });
  }
});

module.exports={TotalPlaceOrderRouter};