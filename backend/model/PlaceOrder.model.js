const mongoose = require("mongoose");

const placeOrderSchema = mongoose.Schema(
  {
    name: String,
    image: Array,
    stock: Number,
    quantity:Number,
    premium: Number,
    mrp: Number,
    price: Number,
    discount: Number,
    code:String,
    product_benefits:String,
    reviews: Number,
    rating: Number,
    flavour:String,
    description: Object,
    category:String,
    user:String
  },
  { versionKey: false }
);

const PlaceOrderModel = mongoose.model("placeorder", placeOrderSchema);

module.exports = { PlaceOrderModel };
