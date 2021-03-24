const connection = require("./Connection");

const addRequest = (data,callback) =>{
    const date = new Date();
    const query = "INSERT IGNORE INTO requests (req_type_id,owner_id,reason,description,date,time,original_file_name,files,viewed,onView)"+
    " VALUES ('"+data.reqId+"','"+data.id+"','"+data.reason+"','"+data.description+"', '"+date.toLocaleDateString()+"',"+
    "'"+date.toLocaleTimeString()+"','"+data.original_name+"','"+data.pdf+"','"+0+"','"+0+"')";


    connection.query(query, function (error, result) {
        if (error){
            console.log(error);
          return callback(false);
    }
        else
          return callback(true);
      });

};
module.exports = addRequest;