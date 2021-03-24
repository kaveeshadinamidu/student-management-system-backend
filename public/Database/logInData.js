const connection = require("./Connection");
const logData = (username,callback) =>{
    connection.query("SELECT * FROM login_details where username = '" + username + "'", function (error, rows) {
    if (error) {
      return callback(error);
    } else {
      
      return callback(rows);

    }
  });


    return callback(-1);
    
};

module.exports = logData;