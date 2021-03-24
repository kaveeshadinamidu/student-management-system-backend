require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
const session = require("express-session");
const app = express();
const cookieParser = require('cookie-parser');

// use it before all route definitions
app.use(cors({
  origin: 'http://localhost:3000'
}));



app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 60*60*24*1000
  }
}));


const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'website',
    database: 'student_management_system',

  });
  connection.connect(function (error) {
    if (error) {
      console.log(error);
    }else{
      console.log("Succesfully Connected to Database!");
    }
  });



app.use(express.static("public"));
app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));



//Routing
const API = require("./public/Routes/Api");




app.use("/api",API);



app.listen(process.env.PORT || process.env.DEVELOPMENTPORT, function (req, res) {
  console.log("Server started sucessfully at port "+process.env.DEVELOPMENTPORT || process.env.PORT);
});


