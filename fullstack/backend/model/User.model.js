const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
