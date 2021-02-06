const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Connection_url="mongodb+srv://birthdayremainder:birthdayremainder123@cluster0.l8dju.mongodb.net/BirthdayRemainder?retryWrites=true&w=majority";
mongoose.connect(Connection_url,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection is succesful');
}).catch((err)=>{
    console.log(`error in connection ${err}`);
});