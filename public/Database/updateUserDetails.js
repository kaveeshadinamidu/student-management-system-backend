const connection = require("./Connection");
const updateUserDetails = (id,first_name,second_name,email,phone_number,faculty,callBack) =>{
    connection.query("UPDATE user_details SET first_name = '"+first_name+"',second_name = '"+second_name+"',email = '"+email+"',phone_number = '"+phone_number+"',faculty = '"+faculty+"' WHERE id = '"+id+"'", function (error, result) {
        if (error) 
          return callBack(false);
        else
          return callBack(true);
      });

};



module.exports = updateUserDetails;
