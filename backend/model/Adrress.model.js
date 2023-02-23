const mongoose=require("mongoose")

const addressSchema=mongoose.Schema({
    name:{type:String,isrequired:true},
    mobile:{type:String,isrequired:true},
    address:{type:String,isrequired:true},
    pincode:{type:Number,isrequired:true},
    landmark:{type:String,isrequired:false},
    user:{type:String,isrequired:true}
})
const AddressModel=mongoose.model('addres',addressSchema)

module.exports=AddressModel