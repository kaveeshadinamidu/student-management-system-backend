const connection = require("./Connection");

const getReqeustToid = (req_id,id,callback) =>{
    connection.query("select * from requests where req_type_id = '"+req_id+"' and viewer_id = '"+id+"'", function (error, rows) {
    if (error) {
      console.log(error);
      return callback(0);
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getReqeustToid;