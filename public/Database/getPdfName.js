const connection = require("./Connection");

const getPdfName = (id,callback) =>{
    connection.query("select files,original_file_name from requests where req_id ='"+id+"'", function (error, rows) {
    if (error) {
      console.log(error);
      return;
    } else {
      
      return callback(rows);

    }
  });

    
};

module.exports = getPdfName;