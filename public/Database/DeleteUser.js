const connection = require("./Connection");


  const deleteUser = (id,callback) =>{
    connection.query("DELETE FROM login_details WHERE id = '"+id+"'", function (error,result) {
      console.log(error);
    if (error) {
      return callback(false);
    }
  });
    connection.query("DELETE FROM user_details where id = '"+id+"'",(err)=>{
      if(err){
        return callback(false);
      }
    });
    connection.query("DELETE FROM requests where owner_id = '"+id+"'",(err)=>{
      if(err){
        return callback(false);
      }else{
        return callback(true);
      }
    });

    
};

module.exports = deleteUser;