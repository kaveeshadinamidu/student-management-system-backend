const connection = require("./Connection");

const AddRequestType = (data,callBack) =>{
    connection.query("INSERT INTO request_types (color, title_one, title_two) VALUES ('"+data.colorVal+"', '"+data.reqVal+"','Request')", function (error, result) {
        if (error) 
          return callBack(false);
        else
          return callBack(true);
      });

};

module.exports = AddRequestType;