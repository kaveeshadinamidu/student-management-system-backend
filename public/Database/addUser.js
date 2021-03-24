const connection = require("./Connection");
const logData = (id,username,password,accountType,name,callBack) =>{
    connection.query("INSERT INTO login_details (id, username, password,accounttype,name) VALUES ('"+id+"', '"+username+"','"+password+"','"+accountType+"','"+name+"')", function (error, result) {
        if (error) 
          return callBack(error);
        else
          return callBack(0);
      });

};

module.exports = logData