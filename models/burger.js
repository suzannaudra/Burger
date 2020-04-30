var orm = require('../config/orm.js');
// methods used to modify burger database
var burger = {
  all: function(cb){
    orm.all('burgers', function(res) {
      cb(res);
    })
  }
,
update: function(id,cb){
  orm.update('burgers',id,cb);
}
,
create: function(val,cb){
  orm.create('burgers',val,cb);
}
}

module.exports = burger;