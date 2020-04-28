var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  burger.all(function(burger_data){
    console.log(burger_data)
 
  res.render('index',{burger_data});
}) 
})

router.put('/burgers/update', function(req,res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/')
  })
})
//link the routes and the server file together
router.post('/')
module.exports = router;