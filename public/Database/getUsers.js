const connection = require("./Connection");
const users = (callback) =>{
    connection.query("SELECT id,name from login_details", function (error, rows, columns) {
    if (error) {
      
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = users;