
var connection = require('./connection.js');

////Object with methods to collect Data from Database
var orm = {
  all: function(tableInput,cb){
    connection.query('SELECT * FROM '+tableInput+';', function(err, result){
      if(err) throw err;
      cb(result)
    })
},

//Object to Update data within Database
update:function(tableInput, condition, cb){
  connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err,result){
    if(err)throw err;
    cb(result);
  })
},
//Object to create new data in Database
create:function(tableInput,val,cb) {
  connection.query('INSERT INTO '+tableInput+" (burger) VALUES ('"+val+"');", function(err,result){
    if(err)throw err;
    cb(result);
  })
}
}

module.exports = orm;