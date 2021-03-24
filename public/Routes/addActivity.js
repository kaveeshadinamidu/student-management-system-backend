const express = require("express");
const addActivity = require("../Database/AddActivity")

const router = express.Router();

router.post("/",async (req,res)=>{
    console.log("Activity Log function called!");
    addActivity(req.body.id,req.body.description,(error)=>{
        if(error){
            res.send(false)
        }else{
            res.send(true)
        }
    })
});
module.exports = router;