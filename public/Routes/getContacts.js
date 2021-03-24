const express = require("express");
const router = express.Router();
const getContacts = require("../Database/getContacts")
const searchContacts = require("../Database/searchContacts")
router.get("/",async (req,res)=>{
    getContacts((rows)=>{
        if(rows){
            res.send(rows);
        }
    });
})

router.get("/search/:val",async (req,res)=>{
    searchContacts(req.params.val,(rows)=>{
        res.send(rows);
    })
})

module.exports = router;