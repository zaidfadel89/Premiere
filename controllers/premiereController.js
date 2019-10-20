var express = require('express');
var router = express.Router();
var premiere = require('../models/premiere.js');

//Setup Routes

// Index Redirect
router.get('/', function(req, res) {
  res.redirect('/index');
});

// Index Page
router.get('/index', function(req, res) {
  premiere.selectAll(function(data) {
    var list = { cars: data };
    //console.log(hbsObject);
    res.render('index', list);
  });
});




router.get('/index/model', function (req, res) 
{
  premiere.selectOne(req.body.model, function() 
  {
    res.redirect('/index');
  });
});



=======
// Create a New Burger
router.get('/premiere/model/:model', function(req, res) {
  premiere.selectOne(req.params.model, function(data) {
    console.log('model name in routes: ' + req.params.model);
    console.log('data in premier/models route: ' + JSON.stringify(data));
    var hbsObject = { info: data };
    res.render('about', hbsObject);
  });
});

router.get('/about', function(req, res) {
  premiere.selectAllinf(function(data) {

    var hbsObject = { info: data };
    res.render('about', hbsObject);
  });
});

// dealer
router.get('/dealer', function (req, res) 
{
    premiere.selectAllDealer(function(data) 
  {
    var hbsObject = [{ info: data },{cars: data}];
    //console.log(hbsObject);
    res.render('dealer', hbsObject);
  });
});
// Export routes
module.exports = router;
=======


