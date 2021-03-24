const connection = require("./Connection");

const getFullName = (id,callback) =>{
    connection.query("SELECT name from login_details where id = '"+id+"'", function (error, rows) {
    console.log(rows);
      if (error) {
      console.log(error);
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getFullName;