

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
// const { body, validationResult } = require('express-validator');


// router.post('/contact', 
// [
//     body('name','Enter a valid name').isLength({min:3}),
//     body('email', 'Enter a valid email').isEmail(),
//     body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], 
    
//     async (req, res) => {
//         try 
//         {
//             const { name, email, description } = req.body;

//             // If there are errors, return Bad request and the errors
//             const errors = validationResult(req);
//             if (!errors.isEmpty()) {
//                 return res.status(400).json({ errors: errors.array() });
//             }

//             const contact = new Contact({
//                 name, email, description
//             })

//             const savecontact = await contact.save()

//             res.json(savecontact)

//         } catch (error) {
//             console.error(error.message);
//             res.status(500).send("Internal Server Error");
//         }
//     })

router.route('/contact').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const description = req.body.description; 
    
  
    const contact = new Contact({
      name,
      email,
      description,
      
    });
  
    contact.save()
    .then(() => res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err));
  });



// const express = require('express');
// const router = express.Router();
// const Contact = require('../models/Contact');



// router.post('/contact', 

    
//     async (req, res) => {
//         try 
//         {
//             const { name, email, description } = req.body;
//             const contact = new Contact({
//                 name, email, description
//             })

//             const savecontact = await contact.save()

//             res.json(savecontact)

//         } catch (error) {
//             console.error(error.message);
//             res.status(500).send("Internal Server Error");
//         }
//     })
  module.exports=router