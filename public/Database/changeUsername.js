const connection = require("./Connection");
  const updateUserName = (id,username,callBack) =>{
    connection.query("UPDATE login_details SET username = '"+username+"' WHERE id = '"+id+"'", function (error, result) {
        if (error) 
          return callBack(false);
        else
          return callBack(true);
      });

};



module.exports = updateUserName;
