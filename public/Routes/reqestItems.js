const express = require("express");
const router = express.Router();
const getReqTypes = require("../Database/getReqTypes");
const getTypeRequests = require("../Database/getTypedReq");
const updateRequestView = require("../Database/updateRequestView");
const updateComments = require("../Database/updateComments");
const getComments = require("../Database/getComments");
const getReqeustToid = require("../Database/getReqeustToid");
const getViewer = require("../Database/getViewerId");
const getMailToID = require("../Database/getEmail");

router.get("/all",async (req,res)=>{
    getReqTypes((rows)=>{
        res.send(rows);
    })
});

router.get("/type/:reqID", async (req,res)=>{
    getTypeRequests(req.params.reqID,(rows)=>{
        res.send(rows);

    })
});




router.get("/type/ID/:reqID/:ID", async (req,res)=>{
    getReqeustToid(req.params.reqID,req.params.ID,(rows)=>{
        res.send(rows);

    })
});

router.put("/viewrequest/:reqID",async (req,res)=>{
    updateRequestView(req.body.id,req.params.reqID,(response)=>{
        res.send(response);
    })
});

router.post("/add/comments",async (req,res)=>{
    updateComments(req.body,(response)=>{
        res.send(response);
    })
});

router.get("/get/comments/:req_ID", async (req,res)=>{
    getComments(req.params.req_ID,(rows)=>{
        res.send(rows);
    })
});
router.get("/get/viewerMail/:keyID",async (req,res)=>{
    getViewer(req.params.keyID,(response)=>{
        if(response){
            getMailToID(response,(response2)=>{
                if(response2){
                    res.send(response2);
                }else{
                    res.send(false);
                }
            })
        }else{
            res.send(false);
        }
    })
});



module.exports = router;