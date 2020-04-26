var mysql = require('mysql');

let connection;
if(!process.env.JAWSDB_URL) {
connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Suzann!A27',
  database:'burgers_db'
});
}
else {
  connection.mysql.createConnection(process.env.JAWSDB_URL);
}

connection.connect(function(err){
  if(err)throw err;
  console.log("connected at" + connection.threadId)
});

module.exports = connection;