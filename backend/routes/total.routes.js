const express = require("express");
const { ProductModel } = require("../model/Product.model");

const TotalRouter = express.Router();

TotalRouter.get("/",async(req,res)=>{
   
const query = req.query
const q = query.q || ""


const sort = query._sort || null
const order = query._order || null
const limit = query._limit || 5
const page = query._page || 1
let discount = query.discount || 0
let rating = query.rating || 0

delete query.q
delete query._sort
delete query._order
delete query._limit
delete query.discount
delete query.rating

let _sorting = {}
_sorting[`${sort}`] = order

let Skip;
if(page==1){
  Skip = 0
}
else{
 Skip= (page-1)*limit
}

const TotalCount = await ProductModel.countDocuments();
const ProductData = await ProductModel.find({name:{$regex:q},...query,discount:{$gte:+discount},rating:{$gte:+rating}}).sort(_sorting).skip(Skip).limit(limit)

 res.send({ProductData,TotalCount})
})



module.exports = { TotalRouter };

