const express = require("express");
const router = express.Router();


//API Routes
//GET api/books
router.get ("/", (req, res)=> {
    res.send("get the book");
  });
  
  //API Route 
  //POST api/books
  router.post ("/", (req, res)=> {
      res.send("add the book");
    });
  
    //API Route 
  //PUT api/books/:id
  router.put ("/:id", (req, res)=> {
      res.send("update the book");
    });
  
    

   return module.exports = router;
    