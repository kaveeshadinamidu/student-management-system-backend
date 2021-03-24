const connection = require("./Connection");

const setAccept= (id,callback) =>{
    connection.query("update requests set accepted = '1' where req_id = '"+id+"'", function (error) {
    if (error) {
      console.log(error);
      return callback(false);
    } else {
      
      return callback(true);
    }
  });  
};



module.exports = setAccept;
