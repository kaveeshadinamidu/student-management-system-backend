const connection = require("./Connection");

const DeleteRequest = (key_id,callback) =>{
    const date = new Date();
    connection.query("Delete from requests where req_id = '"+key_id+"'", function (error, result) {
        if (error){
            console.log(error);
          return callback(error);
    }
        else
          return callback(true);
      });

};
module.exports = DeleteRequest;