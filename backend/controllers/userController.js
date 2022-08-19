const User = require("../models/user");
const bcrypt=require("bcryptjs")
const validator=require('validator');
const { isValidEmail } = require("../utils/validateEmail");
const { getTokenCookie } = require("../utils/genrateTokenCookie");

module.exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (!(name || email || !password)) {
    res.status(400).json({
        success: false,
        message: "name, email and password are required"});
    }


    let Errormessage="";
    
    //check name is not longer then 40charaters 
    if(!name.length>40) Errormessage="Name should be maximum 40 characters"
    
    //check email is valid or not
    if(!isValidEmail(email)) Errormessage="Enter valid email id"
    
    //check email is already exist or not
    const emailExist=await User.findOne({email})
    if(emailExist) Errormessage='email is already exist'

    //if there is no error then inserted data into database and users browser by cookies otherwise show valid error message
    if(!Errormessage){

        //create a encrypted password
        const encryptedPass=await bcrypt.hash(password,10)
        
        //create fields in database 
        const user= await User.create({
        name,
        email,
        password:encryptedPass
        })
        
        user.password=undefined;
        res.status(200).json({success:true,message:"user registerd successfully",user})
        
        // //token and cookie genration function 
        // getTokenCookie(user,res)

    } else{
        res.status(500).json({success:false,message:Errormessage})
    }   
        
};



// SignIn route
module.exports.signIn= async (req,res)=>{
    const {email,password}=req.body;

    // check both field are exist or not
    if(!(email || password)){
        res.status(500).json({success:false,message:"email and password are require"})
    }

    const getUser=await User.findOne({email}).select('+password')
    if(!getUser){
        res.status(400).json({success:false,message:"email is not registerd"})
    }

    //validatePassword method comming from models section
    const isValidUser=await getUser.validatePassword(password)
    if(isValidUser)
    {   
        getTokenCookie(getUser,res)
    }
    else{
        res.status(400).json({
            success:false,message:"email or password does not match or exist"
        })
    }
}
