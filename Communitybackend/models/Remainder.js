const mongoose = require('mongoose');
const { Schema } = mongoose;
const RemainderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    till:{
        type:String
    },
    date: {
        type: String,
        default: Date.now
    },
});
module.exports = mongoose.model('remainders', RemainderSchema);