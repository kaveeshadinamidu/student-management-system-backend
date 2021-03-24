const connection = require("./Connection");

const getViewer = (id,callback) =>{
    connection.query("SELECT viewer_id from requests where req_id = '"+id+"'", function (error, rows) {
    console.log(rows);
      if (error) {
      console.log(error);
      return callback(false);
    } else {
      const insID = rows[0].viewer_id;
      return callback(insID);
    }
  });

    
};

module.exports = getViewer;