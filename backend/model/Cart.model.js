const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
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
    user: String
  },
  { versionKey: false }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
