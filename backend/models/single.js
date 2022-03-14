const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const singleSchema = new Schema({
    f_Name: {
        type: String,
        required: true
    },
    f_Path: {
        type: String,
        required: true
    },
    f_Type: {
        type: String,
        required: true
    },
    f_Size: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Single', singleSchema);