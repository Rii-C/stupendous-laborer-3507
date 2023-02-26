const express = require("express");
const { TotalPlaceOrderModel } = require("../model/TotalPlacedOrder");



const TotalPlaceOrderRouter = express.Router();

TotalPlaceOrderRouter.get("/", async (req, res) => {
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

const TotalOrdersCount = await TotalPlaceOrderModel.countDocuments();
const TotalOrdersData = await TotalPlaceOrderModel.find({name:{$regex:q},...query,discount:{$gte:+discount},rating:{$gte:+rating}}).sort(_sorting).skip(Skip).limit(limit)

 res.send({TotalOrdersData,TotalOrdersCount})
});


TotalPlaceOrderRouter.post("/add", async (req, res) => {
  try {
    const TotalOrdersData = await TotalPlaceOrderModel.insertMany(req.body);
   
    res.send({ message: "Order has been added successfully to the total place order's database" });
  } catch (error) {
    res.send({ message: "Cannot add the place order to the total place order's database", error: error.message });
  }
});

TotalPlaceOrderRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id
  try {
    await TotalPlaceOrderModel.findByIdAndUpdate({_id:id},req.body);
    res.send({ message: "Order has been updated successfully to the total place order's database" });
  } catch (error) {
    res.send({ message: "Cannot update the place order to the total place order's database", error: error.message });
  }
});

module.exports={TotalPlaceOrderRouter};