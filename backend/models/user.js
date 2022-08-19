const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },

  role: {
    type: String,
    default: "user",
  },

  photo: {
    id: {
      type: String,
    },
    secure_url: {
      type: String,
      
    },
  },
  address:String,
  forgotPasswordToken: String, 
  forgotPasswordExpiry: Date,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// //encrypt password before save into the database-HOOK
// userSchema.pre("save", async function (next) {
//   //run when insert updated password
//   console.log('pre function call')
//   if (!this.isModified(this.password)) {
//     console.log(this.isModified(this.password))
//     //isModified function return true when insert updated data into then given field
//     return next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });

 
//Password matching 
userSchema.methods.validatePassword= async function (enteredPassword){ //use async because database maybe in another continent so it take some time
  return await bcrypt.compare(enteredPassword,this.password)
}

//method for get jwt token
userSchema.methods.getJwtToken=function(){
  return jwt.sign({id:this._id,email:this.email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXP});
}

module.exports = mongoose.model("user", userSchema);
