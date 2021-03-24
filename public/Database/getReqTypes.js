const connection = require("./Connection");

const RequestTypes = (callback) =>{
    connection.query("select * from request_types", function (error, rows) {
    if (error) {
      console.log(error);
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = RequestTypes;