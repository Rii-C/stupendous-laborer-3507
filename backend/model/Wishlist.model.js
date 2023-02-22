const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema(
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

const WishlistModel = mongoose.model("wishlist", wishlistSchema);

module.exports = { WishlistModel };
