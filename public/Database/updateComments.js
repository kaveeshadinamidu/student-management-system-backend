const connection = require("./Connection");

const updateComments = (data,callback) =>{
    connection.query("update requests set reason_comment = '"+data.sentenceComment+"',description_comment ='"+data.descriptionComment+"',"+
    "files_comment ='"+data.filesComment+"',additional_comments = '"+data.additionalComment+"'"+
    " where req_id ='"+data.id+"'", function (error) {
    if (error) {
      console.log(error);
      return callback(false);
    } else {
      
      return callback(true);
    }
  });

    
};

module.exports = updateComments;