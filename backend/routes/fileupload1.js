const express = require('express');
const router = express.Router();
const multer = require('multer');

const app = express();
app.use(express.json());


const upload = multer({
  storage : multer.diskStorage({
    destination : function(req,file,cb)
    {
      cb(null,"uploads")
    },
    filename: function (req,file,cb)
    {
      cb(null,file.filename+"_"+Date.now()+".mp3")

    }
  })

}).single("data");
  


router.post ('/upload' ,upload,(req,res)=>{
    res.send("file uploaded ")



})
  module.exports=router
