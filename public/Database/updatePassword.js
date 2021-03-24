const getPassword = require("./getPassword")
const connection = require("./Connection");
const bcrypt = require("bcrypt")
const saltRounds = 10;
const updatePassword = (data,callBack)=>{
    const id = data.id;
    const password = data.currentPassword;
    const newPass = data.newPass;
    getPassword(id,(rows)=>{
        bcrypt.compare(password, rows[0].password, function(err1, result) {
            if(!result){
                return callBack(false);
            }else{
                bcrypt.hash(newPass, saltRounds, function(err, hash) {
                    if (err){
                        return callBack(false);
                    }
                    connection.query("UPDATE login_details SET password = '"+hash+"' WHERE id = '"+id+"'", function (error, result) {
                        if (error){
                            console.log(error);
                            return callBack(false);
                        }  
                        else
                          return callBack(true);
                      });
                });
            }
        });
    })
    
}

module.exports = updatePassword;