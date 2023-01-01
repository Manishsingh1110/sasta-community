const mongoose = require('mongoose');
const { Schema } = mongoose;
const FilesSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    noteid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Notes',
        required: true,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: true,
    },
    filedirectory: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now
    },
});
module.exports = mongoose.model('Pdffiles', FilesSchema);