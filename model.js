const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    // unique: true,
    trim:true
  }, 
  age:{
    type:Number,
  },
  createdAt:{
type: Date,
default: new Date()
  }
});
 
const users=mongoose.model('users',userSchema)
userSchema.index({firstName:1},{unique:true})

module.exports=users