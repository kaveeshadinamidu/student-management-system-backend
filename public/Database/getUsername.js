const connection = require("./Connection");

const getUsername = (id,callback) =>{
    connection.query("SELECT username from login_details where id = '"+id+"'", function (error, rows, columns) {
    if (error) {
      
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

const getFullName = (id,callback)=>{
  connection.query("SELECT name from login_details where id = '"+id+"'", function (error, rows, columns) {
    if (error) {
      
      return callback(0);
    } else {
      
      return callback(rows);

    }
  }); 
}

module.exports = getUsername;
