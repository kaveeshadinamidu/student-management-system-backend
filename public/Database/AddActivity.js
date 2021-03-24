const connection = require("./Connection");
const addActivity = (id,description,callback) =>{
    const date = new Date();
    connection.query("INSERT INTO activity_log (id, date, description,time) VALUES ('"+id+"', '"+date.toLocaleDateString()+"','"+description+"', '"+date.toLocaleTimeString()+"')", function (error, result) {
        if (error){
            
          return callback(false);
    }
        else
          return callback(true);
      });

};
module.exports = addActivity;