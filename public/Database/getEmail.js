const connection = require("./Connection");

const getMailToID = (id,callback) =>{
    connection.query("SELECT email from user_details where ID = '"+id+"'",function (error,rows){
        if(error){
            console.log(error);
            callback(false);
        }else{
            callback(rows);
        }
      });

    
};

module.exports = getMailToID;

