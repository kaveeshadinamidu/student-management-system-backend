const connection = require("./Connection");

const getRequestsID = (id,callback) =>{
    connection.query("SELECT * "+
    "from requests where owner_id= '"+id+"'", function (error, rows) {
    if (error) {
      console.log(error);
      return;
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getRequestsID;