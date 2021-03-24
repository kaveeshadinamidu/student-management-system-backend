const express = require("express");
const bcrypt = require("bcrypt");


const router = express.Router();

const logData = require("../Database/logInData");

router.get("/logout", async (req,res)=>{
    if(req.session){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.send(req.session);
            }
        })
    }
});

router.get("/",async (req,res)=>{
    if (req.session.loggedIn){
        try{
            logData(req.session.username,function(rows){
                if(rows){
                const data = [{
                    name: rows[0].name,
                    id:rows[0].id,
                    accounttype:rows[0].accounttype
    
                }]
                res.send(data);
            }
            })
        }catch(err){
            console.log("error OCuured!");
            
        }
        
    }else{
        res.send(false);
    }
})

router.post("/", async (req, res)=> { 
    
    logData(req.body.username,function (rows){
        
        if (rows.length){
            bcrypt.compare(req.body.password, rows[0].password, function(err, result) {
                console.log(result);
                if(result){
                    req.session.loggedIn = true;
                    req.session.username = req.body.username;
                    console.log(req.session);
                    const data = [{
                        name: rows[0].name,
                        id:rows[0].id,
                        accounttype:rows[0].accounttype

                    }]
                    res.send(data);
                }else{
                    
                    res.send("-1");
                }
            });
        }else if(rows.length == 0){
            res.send("-1");
        }    
    });
    
    
  });
  
module.exports = router;