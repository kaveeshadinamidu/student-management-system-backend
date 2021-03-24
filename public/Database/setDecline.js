const connection = require("./Connection");

const setDecline= (id,callback) =>{
    connection.query("update requests set declined = '1' where req_id = '"+id+"'", function (error) {
    if (error) {
      console.log(error);
      return callback(false);
    } else {
      
      return callback(true);
    }
  });  
};


module.exports = setDecline;