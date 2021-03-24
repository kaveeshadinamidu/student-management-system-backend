const connection = require("./Connection");
const getRecordsToID = (id,callback) =>{
    connection.query("select * from requests where owner_id = '"+id+"'", function (error, rows) {
    if (error) {
      console.log(error);
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getRecordsToID;