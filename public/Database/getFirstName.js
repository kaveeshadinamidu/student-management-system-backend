const connection = require("./Connection");

const getFirstName = (id,callback) =>{
    connection.query("SELECT first_name from user_details where id = '"+id+"'", function (error, rows) {
    console.log(rows);
      if (error) {
      console.log(error);
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getFirstName;