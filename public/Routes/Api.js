const express = require("express");
const router = express.Router();
const logIn = require("../Routes/loginroute");
const signUp = require("../Routes/createUser");
const getUsers = require("../Routes/getUsers");
const getActivity = require("../Routes/getActivity");
const addActivity = require("../Routes/addActivity");
const getuserdetails = require("../Routes/getUserDetails");
const getContacts = require("../Routes/getContacts");
const requests = require("../Routes/requests");
const reqestItems = require("../Routes/reqestItems");

router.use("/login",logIn);
router.use("/getusers",getUsers);
router.use("/signup",signUp);
router.use("/getactivity",getActivity);
router.use("/addactivity",addActivity);
router.use("/getuserdetails",getuserdetails);
router.use("/getcontacts",getContacts);
router.use("/requests",requests);
router.use("/requestitems",reqestItems);

module.exports = router;
