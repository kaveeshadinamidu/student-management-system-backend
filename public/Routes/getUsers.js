const express = require("express");
const router = express.Router();
const users = require("../Database/getUsers");
const searchUsers = require("../Database/SerachUsers");
const deleteUser = require("../Database/DeleteUser");
const getFirstName = require("../Database/getFirstName");
const getFullName = require("../Database/getFullName")
router.get("/",async (req,res)=>{
    users((rows)=>{
        res.send(rows)
    })
});
router.get("/search/:val",async (req,res)=>{
    if(req.params.val){
    searchUsers(req.params.val,(rows)=>{
        res.send(rows);

    })
    }else{
        res.send([]);
    }
});


router.get("/name/:id",(req,res)=>{
    getFirstName(req.params.id,(rows)=>{
        res.send(rows[0].first_name);
    })
    
});

router.get("/fullName/:id",(req,res)=>{
    getFullName(req.params.id,(rows)=>{
        res.send(rows);
    })
    
});

router.delete("/delete/:id",async (req,res)=>{
    deleteUser(req.params.id,(result)=>{
        res.send(result);
    })
})


module.exports = router;