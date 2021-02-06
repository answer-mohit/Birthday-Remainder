const express=require('express');
const app=express();
const port=8001||process.env.PORT;
const Cors=require('cors');
require("./db/conn");
const ListModel=require('./models/list');
app.use(express.json());
app.use(Cors());
app.post("/list",async(req,res)=>{
    try{
        const SaveList=new ListModel(req.body);
        const myList=await SaveList.save();
        console.log(myList);
        res.status(201).send('added');
    }catch(err){
        res.status(400).send(err);
    }
});
app.get("/list",async(req,res)=>{
    try{
        const Findlist=await ListModel.find();
      res.status(201).send(Findlist);
    }catch(err){
console.log(err);
    }
})
app.listen(port,()=>{
    console.log('this is connect');
});