const connection = require("./Connection");

const getPassword = (id,callback) =>{
    connection.query("SELECT password from login_details where id = '"+id+"'", function (error, rows) {
    if (error) {
      
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getPassword;