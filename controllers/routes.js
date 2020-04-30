var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
  burger.all(function(burger_data){
    console.log(burger_data)
 
  res.render('index',{burger_data});
}) 
})
// This function is not working as expected, burger does not get eaten. 
//Makes devhoured burgers disappear
router.put('/burgers/update', function(req,res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  })
})

router.post("/api/new-burger", function(req, res) {
 burger.create(
    req.body.name
  , function(result) {
    // Send back the ID of the new burger
    res.redirect('/');
    console.log(result)
  });
});
//link the routes and the server file together
router.post('/')
module.exports = router;