const connection = require("./Connection");

const deletePdf = (filename,callback) =>{
    const date = new Date();
    connection.query("UPDATE requests SET original_file_name = 'undefined',files = 'undefined' where files = '"+filename+"'", function (error, result) {
        if (error){
            console.log(error);
          return callback(error);
    }
        else
          return callback(0);
      });

};
module.exports = deletePdf;