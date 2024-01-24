const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const router = require('./routers/userRouter');
const userModel=require('./model/userModel');

const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT || 5500

mongoose.connect("mongodb+srv://admin:admin@cluster0.ey97pbk.mongodb.net/ecommerce?retryWrites=true&w=majority").then((res)=>{
    console.log("db connected..");
}).catch((err)=>{
    console.log(err);
})

app.use(router)



app.listen(PORT,()=>{
    console.log(`serveer is running on port ${PORT}`);
})