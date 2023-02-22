const express = require("express");
const { TotalPlaceOrderModel } = require("../model/TotalPlacedOrder");



const TotalPlaceOrderRouter = express.Router();

TotalPlaceOrderRouter.get("/", async (req, res) => {
  if (req.query.category) {
    try {
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find({
        category: { $regex: `${req.query.category}`, $options: "i" },
      });
      res.send(TotalPlaceOrderData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.category} catgory of products`,
        error: error.message,
      });
    }
  } else if (req.query.name) {
    try {
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find({
        name: { $regex: `${req.query.name}`, $options: "i" },
      });
      res.send(TotalPlaceOrderData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.name} name of products`,
        error: error.message,
      });
    }
  } else if (req.query.flavour) {
    try {
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find({
        flavour: { $regex: `${req.query.flavour}`, $options: "i" },
      });
      res.send(TotalPlaceOrderData);
    } catch (error) {
      res.send({
        message: `Cannot get this ${req.query.name} name of products`,
        error: error.message,
      });
    }
  } else if (req.query.discount) {
    try {
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find().sort({
        discount: `${req.query.discount}`,
      });
      res.send(TotalPlaceOrderData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.price) {
    try {
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find().sort({
        price: `${req.query.price}`,
      });
      res.send(TotalPlaceOrderData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.rating) {
    try {
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find().sort({
        rating: `${req.query.rating}`,
      });
      res.send(TotalPlaceOrderData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else if (req.query.reviews) {
    try {
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find().sort({
        reviews: `${req.query.reviews}`,
      });
      res.send(TotalPlaceOrderData);
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
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find().skip(page*limit-limit).limit(limit);
      res.send(TotalPlaceOrderData);
    } catch (error) {
      res.send({
        message: `Cannot get products in this ${req.query.discount} order  `,
        error: error.message,
      });
    }
  } else {
    try {
      const TotalPlaceOrderData = await TotalPlaceOrderModel.find();
      res.send(TotalPlaceOrderData);
    } catch (error) {
      res.send({ message: "Cannot get posts", error: error.message });
    }
  }
});


TotalPlaceOrderRouter.post("/add", async (req, res) => {
  try {
    const TotalOrdersData = new TotalPlaceOrderModel(req.body);
    await TotalOrdersData.save();
    res.send({ message: "Order has been added successfully to the total place order's database" });
  } catch (error) {
    res.send({ message: "Cannot add the place order to the total place order's database", error: error.message });
  }
});

module.exports={TotalPlaceOrderRouter};