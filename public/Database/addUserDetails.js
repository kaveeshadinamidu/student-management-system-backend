const connection = require("./Connection");

const addUserDetails = (id,first_name,second_name,email,phone_number,faculty,callBack) =>{
    connection.query("INSERT INTO user_details (id, first_name,second_name,email,phone_number,faculty) VALUES ('"+id+"', '"+first_name+"','"+second_name+"','"+email+"','"+phone_number+"','"+faculty+"')", function (error, result) {
        if (error) 
          return callBack(false);
        else
          return callBack(true);
      });

};



module.exports = addUserDetails;
