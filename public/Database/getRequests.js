const connection = require("./Connection");

const getRequests = (callback) =>{
    connection.query("SELECT * "+
    "from requests where viewed= 0", function (error, rows) {
    if (error) {
      console.log(error);
      return;
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getRequests;