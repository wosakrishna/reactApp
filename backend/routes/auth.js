const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken') 
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Krishnaisag@@dB@y'

router.post('/createuser', [
    body('name','Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').isLength({min:5})
  ],
  async(req,res)=>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });

    }
    try{
    let user = await User.findOne({ email: req.body.email });
    if (user)
 
     {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    
    const nsecPass = req.body.password;
    console.log(`old password of the use is ${nsecPass}`);


    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    console.log(`New password of the use is ${secPass}`);
    
    user= await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
    //   }).then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error:"Enter a unique value of E=mail",message:err.message})
    

     })
     const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);


     res.json({authtoken})
    }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
     }

   

})

router.post('/login', [

  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists()
  

],
async(req,res)=>
{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
   
  }
  const {email,password}=req.body;
  try{
      const user =await User.findOne({email});
      if(!user){
        return res.status(400).json({ error: "Please try to login with corrent login and password" });
        
      }
      const passwordCompare = await bcrypt.compare(password , user.password);
      if(!passwordCompare){
        return res.status(400).json({ error: "Please try to login with corrent login and password" });

      }
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
  
  
       res.json({authtoken})
    


  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}


});


//route-3
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user) 
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})




module.exports = router