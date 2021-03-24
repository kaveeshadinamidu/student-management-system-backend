const express = require("express");
const router = express.Router();
const activity = require("../Database/getActivity")
const addActivity = require("../Database/AddActivity")
router.post("/",async (req,res)=>{
    activity(req.body.id,(rows)=>{
        if(rows === 404){
            res.sendStatus(404);
        }
        res.send(rows)
    })
})



module.exports = router;