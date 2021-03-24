const connection = require("./Connection");
const searchContacts = (val,callback) =>{
    connection.query("SELECT ID,first_name,second_name,email from user_details WHERE CONCAT(first_name,second_name,email) LIKE '%"+val+"%' ",function (error, rows) {
            if (error) {
                console.log(error);
                return callback([]);
            } else {
                return callback(rows);

            }
        
  });

    
};

module.exports = searchContacts;

