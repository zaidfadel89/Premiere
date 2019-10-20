var express = require('express');
var router = express.Router();
var premiere = require('../models/premiere.js');


//Setup Routes

// Index Redirect
router.get('/', function (req, res) 
{
  res.redirect('/index');
});

// Index Page 
router.get('/index', function (req, res) 
{
    premiere.selectAll(function(data) 
  {
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


router.get('/about', function (req, res) 
{
    premiere.selectAllinf(function(data) 
  {
    var hbsObject = { info: data };
    //console.log(hbsObject);
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