const express = require("express");
const { ProductModel } = require("../model/Product.model");

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  if (req.query.category) {
    try {
      const ProductData = await ProductModel.find({
        category: { $regex: `${req.query.category}`, $options: "i" },
      });
      res.send(ProductData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.category} catgory of products`,
        error: error.message,
      });
    }
  } else if (req.query.name) {
    try {
      const ProductData = await ProductModel.find({
        name: { $regex: `${req.query.name}`, $options: "i" },
      });
      res.send(ProductData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.name} name of products`,
        error: error.message,
      });
    }
  } else if (req.query.flavour) {
    try {
      const ProductData = await ProductModel.find({
        flavour: { $regex: `${req.query.flavour}`, $options: "i" },
      });
      res.send(ProductData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.name} name of products`,
        error: error.message,
      });
    }
  } else if (req.query.discount) {
    try {
      const ProductData = await ProductModel.find().sort({
        discount: `${req.query.discount}`,
      });
      res.send(ProductData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.price) {
    try {
      const ProductData = await ProductModel.find().sort({
        price: `${req.query.price}`,
      });
      res.send(ProductData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.rating) {
    try {
      const ProductData = await ProductModel.find().sort({
        rating: `${req.query.rating}`,
      });
      res.send(ProductData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.reviews) {
    try {
      const ProductData = await ProductModel.find().sort({
        reviews: `${req.query.reviews}`,
      });
      res.send(ProductData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.page && req.query.limit) {
    const page = req.query.page;
    const limit = req.query.limit;
    try {
      const ProductData = await ProductModel.find()
        .skip(page * limit - limit)
        .limit(limit);
      res.send(ProductData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else {
    try {
      const ProductData = await ProductModel.find();
      res.send(ProductData);
    } catch (error) {
      res.send({ message: "Cannot get posts", error: error.message });
    }
  }
});

ProductRouter.post("/add", async (req, res) => {
  try {
    const ProductData = new ProductModel(req.body);
    await ProductData.save();
    res.send({ message: "Product has been added successfully" });
  } catch (error) {
    res.send({ message: "Cannot add product", error: error.message });
  }
});

ProductRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ message: "Order's stock has been updated successfully" });
  } catch (error) {
    res.send({
      message: "Cannot update the order's stock",
      error: error.message,
    });
  }
});

module.exports = { ProductRouter };
