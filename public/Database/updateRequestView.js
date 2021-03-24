const connection = require("./Connection");
const updateRequestView = (id,req_id,callBack) =>{
    connection.query("UPDATE requests SET "+
    " viewed = 1,viewer_id = '"+id+"' WHERE req_id = '"+req_id+"'", function (error, result) {
        if (error) 
          return callBack(false);
        else
          return callBack(true);
      });

};



module.exports = updateRequestView;
