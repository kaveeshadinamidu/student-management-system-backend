const connection = require("./Connection");

const getTypeRequests = (id,callback) =>{
    connection.query("select * from requests where req_type_id = '"+id+"'", function (error, rows) {
    if (error) {
      console.log(error);
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getTypeRequests;