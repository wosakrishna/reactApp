const express =require("express")
const mongoose =require("mongoose")
const dotenv =require("dotenv")
const cors =require("cors")
const path = require('path');
const fileload = require('./routes/fileupload')

const app= express()

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true, limit:'50mb'})); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use
dotenv.config({path:__dirname+'/config.env'}); 

const port = process.env.PORT ; 
app.listen(port, () => {
    console.log(`backend listening at http://localhost:${port}`) 
  })
  
  mongoose.connect(
   process.env.mongoURI,
   { useUnifiedTopology: true, useNewUrlParser: true },
   () => console.log("connected to db"))


   app.use('/api/auth', require('./routes/auth'))
   app.use('/api/notes', require('./routes/notes'))
   app.use('/api/contact', require('./routes/contact'))
   app.use('/api/upload', require('./routes/fileupload1'))
   app.use('/api/upload', fileload);

 