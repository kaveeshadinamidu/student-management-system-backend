const connection = require("./Connection");

const getComments = (id,callback) =>{
    connection.query("SELECT reason_comment,description_comment,files_comment,additional_comments from requests where req_id = '"+id+"'", function (error, rows, columns) {
    if (error) {
      console.log(error);
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getComments;