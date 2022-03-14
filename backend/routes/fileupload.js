const express = require('express');
const {upload} = require('../middleware/filehelper');
const {s_FileUpload} = require('../controllers/s_FileUpload');
const router = express.Router();


router.post('/single', upload.single('file'), s_FileUpload);



module.exports = router;