const express = require('express');
const router = express.Router();
const Sst = require('../models/Sst');



router.post('/Sst', 

    
     (req, res) => {
    
            const sst = new Sst({
                name, email, description
            })

            const savecontact = await contact.save()

            res.json(savecontact)

        
    })