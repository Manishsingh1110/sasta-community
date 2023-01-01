const mongoose=require('mongoose')
const { Schema } = mongoose;

const Answers = new Schema({
    Answerdata:{
        type:String,
        required:true
    },
    questionid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Questions',
        required:true,
    },
    useranswered:{
        type: String
    },
    useransweredid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
    date:{
        type: String,
        default:Date.now
    }
  });
  module.exports = mongoose.model('answer',Answers);
  