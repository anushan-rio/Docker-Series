const express=require('express');
const app=express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://mymongo:27017/startup')
        .then(() => console.log('Connected!!!!Anushan!!!'))
        .catch(()=>console.log("Not Connected!!!!!!!"))


app.listen(8000,()=>{console.log("Port is Runing Sucessfully")})