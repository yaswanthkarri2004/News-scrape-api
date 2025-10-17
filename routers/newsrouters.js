const express = require('express');
const router = express.Router();
const {getAllNews} = require("../controllers/newscontrollers");
const {getCategoryNews} = require("../controllers/categorycontroller");

//define routes
router.get('/', getAllNews);
router.get('/:category', getCategoryNews);

module.exports = router;