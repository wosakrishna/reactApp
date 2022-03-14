const mongoose = require('mongoose');
const { Schema } = mongoose;

const FileuploadSchema = new Schema({

    file:{
        type: String
       }, 
    date:{
        type: Date,
        default: Date.now
    },
  });
  
  module.exports = mongoose.model('fileupload', FileuploadSchema);
 
