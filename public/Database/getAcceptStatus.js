const connection = require("./Connection");

const getAcceptStatus = (id,callback) =>{
    connection.query("SELECT accepted,declined from requests where req_id='"+id+"'", function (error, rows, columns) {
    if (error) {
      console.log(error);
      return;
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getAcceptStatus;