const connection = require("./Connection");

const updateFileNames = (filename,original,id,callback) =>{
    connection.query("update requests set files = '"+filename+"',original_file_name ='"+original+"' where req_id ='"+id+"'", function (error, rows) {
    if (error) {
      console.log(error);
      return callback(false);
    } else {
      
      return callback(true);
    }
  });

    
};

module.exports = updateFileNames;