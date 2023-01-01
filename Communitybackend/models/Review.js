const mongoose = require('mongoose');
const { Schema } = mongoose;
const ReviewSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Comments: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now
    },
});
module.exports = mongoose.model('review', ReviewSchema);