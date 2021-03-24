const connection = require("./Connection");

const getContactsList = (callback) =>{
    connection.query("SELECT ID,first_name,second_name,email from user_details where first_name != 'Not Set'", function (error, rows, columns) {
    if (error) {
      console.log(error);
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getContactsList;