const connection = require("./Connection");

const searchUsers = (val,callback) =>{
    connection.query("SELECT id,name from login_details WHERE CONCAT(name,id) LIKE '%"+val+"%' ",function (error, rows) {
            if (error) {
                return callback([]);
            } else {
                return callback(rows);

            }
        
  });

    
};

module.exports = searchUsers;

