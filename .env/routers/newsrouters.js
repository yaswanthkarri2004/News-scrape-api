const express = require('express');
const router = express.Router();
const {getALLNews} = require('../controllers/newscontrollers');

router.get('/news', getALLNews);    

module.exports = router;