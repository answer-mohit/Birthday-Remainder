const mongoose=require('mongoose');
const ListSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    imageurl:{
        type:String,
        required:true
    },
    age:{
        type:String,
      required:true
    }
});
const ListModel=new mongoose.model("List",ListSchema);
module.exports=ListModel;