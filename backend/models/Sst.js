const mongoose = require('mongoose');
const { Schema } = mongoose;

const SstSchema = new Schema({
    First:{
        type: String,
        required: true
    },
    Second:{
        type: String,
        required: true
    },
    Third:{
        type: String,
        required: true
    },
    Fourth:{
        type: String,
        required: true
    },
  });
  
  module.exports = mongoose.model('Sst', SstSchema);
 
