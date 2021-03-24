const express = require("express");
const getReqTypes = require("../Database/getReqTypes");
const addRequest = require("../Database/Addrequest");
const getRequests = require("../Database/getRequests");
const getPdfName = require("../Database/getPdfName");
const deletePdf = require("../Database/deletePdf");
const updateRequest = require("../Database/updateRequest");
const updateFileNames = require("../Database/updateFileNames");
const DeleteRequest = require("../Database/DeleteRequest");
const getRequestsID = require("../Database/getRequestsID");
const AddRequestType = require("../Database/AddRequestType")
const path = require("path");
const setAccept = require("../Database/setAccept");
const setDecline = require("../Database/setDecline");
const getRecordsToID = require("../Database/getRecordsToId");
const getAcceptStatus = require("../Database/getAcceptStatus");


const fs = require("fs");

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/files')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
});
var upload = multer({ storage: storage }).single('file')

const router = express.Router();

router.get("/getreqtypes",(req,res)=>{
    
    getReqTypes((rows)=>{
        res.send(rows);
    });
});
router.get("/getreqtypes/:id",(req,res)=>{
   
    getReqTypes((rows)=>{
        res.send(rows[req.params.id-1]);
    });
});


router.post("/addrequest",(req,res)=>{
    addRequest(req.body,(response)=>{
        res.send(response);
    })
});

router.delete("/getfile/delete/:filename",async (req,res)=>{
    
    const path1 = path.join(__dirname, '..',"files",req.params.filename);
    try{
        fs.unlink(path1, (err) => {
            if (err) {
              console.log(err);   
            }
            deletePdf(req.params.filename,(response)=>{  
            })
            res.sendStatus(200);
          })
    }catch (err){
        res.sendStatus(404);
    }
    
});

router.post("/addrequest/addfile",async (req,res)=>{
    await upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)

 })
});

router.get("/setstatus/:reqID/:status",async (req,res)=>{
    if(req.params.status === "1"){
        setAccept(req.params.reqID,(response)=>{
            res.send(true);
        })
    }else{
        setDecline(req.params.reqID,(response)=>{
            res.send(false);
        })
    }
});

router.get("/getstatusrequest/:keyID",async(req,res)=>{
    getAcceptStatus(req.params.keyID,(response)=>{
        res.send(response);
        console.log(response);
    })
})

router.get("/getRequests/new",(req,res)=>{
    getRequests((rows)=>{
        res.send(rows);
    })
});

router.get("/getRequestsID/:id",(req,res)=>{
    getRequestsID(req.params.id,(rows)=>{
        res.send(rows);
    })
});

router.get("/getFileNames/:req_id",(req,res)=>{
    
    getPdfName(req.params.req_id,(rows)=>{
        res.send(rows)
    });
});


router.put("/setfilenames",(req,res)=>{
    console.log("Set file names");
    updateFileNames(req.body.pdf,req.body.original_name,req.body.id,(response)=>{
        res.send(response);
    })
});

router.get("/getfilecheck/:filename",(req,res)=>{
    const path1 = path.join(__dirname, '..',"files",req.params.filename);
    res.sendFile(path1,(err)=>{
        if (err){
            res.status(404);
            res.send();
        }
    })
    
    
});

router.get("/getRequests/:Id",(req,res)=>{
    console.log("Function inhere!");
    getRecordsToID(req.params.Id,(rows)=>{
        res.send(rows);
    });
});


router.get("/getfile/:filename",(req,res)=>{
    const path1 = path.join(__dirname, '..',"files",req.params.filename);
    res.sendFile(path1);
    
    
});


router.put("/changerequest",(req,res)=>{
    updateRequest(req.body,(response)=>{
        res.send(response)

    })
});

router.delete("/deletereq/:reqid",(req,res)=>{
    console.log(req.params.reqid);
    DeleteRequest(req.params.reqid,(response)=>{
        res.send(response);
    })
})

router.post("/addrequesttype",(req,res)=>{
    AddRequestType(req.body,(response)=>{
        res.send(response);
    })
})

module.exports = router;