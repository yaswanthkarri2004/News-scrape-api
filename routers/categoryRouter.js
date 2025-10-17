const router = require('express').Router();
const {getCategoryNews} = require("../controllers/categorycontroller"); 


const getCategoryNewss = async (req, res) => {
    res.json({
  "success": true,
  categories:["headlines",
  "indias",
  "world",
  "sports" , 
  "entertainment",
  "business"  ,"health" , "environment" ]}
);
}

router.get('/', getCategoryNewss);



module.exports = router;