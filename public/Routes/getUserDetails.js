const express = require("express");
const getuserdetails = require("../Database/getUserDetails");
const addUserDetails = require("../Database/addUserDetails")
const updateUserDetails = require("../Database/updateUserDetails");
const getUsername = require("../Database/getUsername")
const changeUserName = require("../Database/changeUsername")
const updatePassword = require("../Database/updatePassword")
const router = express.Router();

router.get("/:id",async (req,res)=>{
    getuserdetails(req.params.id,(rows)=>{
        res.send(rows);
    });
});

router.get("/username/:id",async (req,res)=>{
    getUsername(req.params.id,(rows)=>{
        res.send(rows);
    });
});

router.put("/changePassword",async (req,res)=>{
    updatePassword(req.body,(response)=>{
        res.send(response);
    })
})

router.put("/username/",async (req,res)=>{
    changeUserName(req.body.id,req.body.username,(response)=>{
        res.send(response);
    })
});

router.post("/add",async (req,res)=>{
    addUserDetails(req.body.id,req.body.first_name,req.body.second_name,req.body.email,req.body.phone_number,req.body.faculty,(response)=>{
        res.send(response)
    })
});


router.put("/add",async (req,res)=>{
    updateUserDetails(req.body.id,req.body.first_name,req.body.second_name,req.body.email,req.body.phone_number,req.body.faculty,(response)=>{
        res.send(response)
    })
});
module.exports = router;