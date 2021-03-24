const mysql = require('mysql');
const connection = require("./Connection");

const updateRequest = (data,callBack) =>{
    connection.query("UPDATE requests SET "+
    " reason = '"+data.sentence+"',description = '"+data.description+"' WHERE req_id = '"+data.id+"'", function (error, result) {
        if (error) 
          return callBack(false);
        else
          return callBack(true);
      });

};



module.exports = updateRequest;
