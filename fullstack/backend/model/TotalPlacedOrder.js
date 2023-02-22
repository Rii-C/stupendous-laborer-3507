const mongoose = require("mongoose");

const TotalPlaceOrderSchema = mongoose.Schema(
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
  },
  { versionKey: false }
);

const TotalPlaceOrderModel = mongoose.model("totalplaceorder", TotalPlaceOrderSchema);

module.exports = { TotalPlaceOrderModel };