const express=require('express');
require('dotenv').config();
const app=express();
const cookieParser=require('cookie-parser');
const cors=require('cors')
const fileUpload=require('express-fileupload')
const connectWithDB = require('./config/db');

//import all the routes here
const user= require('./routes/user');

//connect with database
connectWithDB()

//regular middleware
app.use(cors({origin:'http://localhost:3000', credentials:true,optionSuccessStatus:200}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookies and file middleware
app.use(cookieParser())
app.use(fileUpload())

//use router middlewares here
app.use("/api/v1",user)


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})