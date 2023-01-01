const mongoose = require('mongoose');
const mongoURI="mongodb+srv://Manishsingh:manish0302@cluster0.oayyb.mongodb.net/collegeproject";
const connecttodatabase= async ()=>{
    try {
        await mongoose.connect(mongoURI,()=>{
            console.log("Connected to Mongo Successfully");
        });
      } catch (error) {
        handleError(error);
      }
}
module.exports=connecttodatabase
