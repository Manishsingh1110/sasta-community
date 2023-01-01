const mongoose=require('mongoose')

const { Schema } = mongoose;

const Question = new Schema({
    questiondata:{
        type:String,
        required:true
    },
    Userpostedid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
    date:{
        type: String,
        default:Date.now
    }
  });
  module.exports = mongoose.model('question',Question);