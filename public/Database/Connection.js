const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'website',
    database: 'student_management_system'
  });
module.exports = connection;