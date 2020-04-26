
var connection = require('./connection.js');

////Object with methods to collect Data from Database
var orm = {
  all: function(tableInput,cb){
    connection.query('SELECT * FROM '+tableInput+';', function(err, result){
      if(err) throw err;
      cb(result)
    })
},

//Object to create new data in Database

//Object to Update data within Database
update:function(tableInput, condition, cb){
  connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+conditon+';', function(err,result){
    if(err)throw err;
    cb(result);
  })
}
}

module.exports = orm;