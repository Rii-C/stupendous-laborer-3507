const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
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
    category:String
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("products", productSchema);

module.exports = { ProductModel };
