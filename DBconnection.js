var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'school'
});
 
connection.connect((err)=>{
  if(err)
  {
    console.log("not connected")
  }
  else console.log("connected")
});

module.exports = connection;