const connection = require("./Connection");

const getAcitivity = (id,callback) =>{
    connection.query("SELECT * from activity_log where id='"+id+"'", function (error, rows, columns) {
    if (error) {
      console.log(error);
      return;
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getAcitivity;