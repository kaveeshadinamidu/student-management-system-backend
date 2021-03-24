const express = require("express");
const bcrypt = require("bcrypt");
const addUser = require("../Database/addUser");
const saltRounds = 10;

const router = express.Router();

router.post("/", async (req, res)=> {
    
    const index = req.body.index;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const accounttype = req.body.accountType;
    
    
     bcrypt.hash(password, saltRounds, function(err, hash) {
        addUser(index,username,hash,accounttype,name,(err)=>{
          if (err){
            res.send(false)
          }else{
            res.send(true);
          }
          
        });
        
        
    });
    
  });
  
module.exports = router;

