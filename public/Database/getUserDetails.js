const connection = require("./Connection");

const getuserdetails = (id,callback) =>{
    connection.query("SELECT * from user_details where id='"+id+"'", function (error, rows, columns) {
    if (error) {
      console.log(error);
      return;
    } else {
      return callback(rows);

    }
  });

    
};

module.exports = getuserdetails;