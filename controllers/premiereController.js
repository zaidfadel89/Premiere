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



// Create a New Burger
router.get('/premiere/model', function (req, res) 
{
  burger.selectOne(req.params.model, function() 
  {
    res.redirect('/index');
  });
});

// // Devour a Burger
// router.post('/burger/eat/:id', function (req, res) 
// {
//   burger.updateOne(req.params.id, function() 
//   {
//     res.redirect('/index');
//   });
// });
router.get('/about', function (req, res) 
{
    premiere.selectAllinf(function(data) 
  {
    var hbsObject = { info: data };
    //console.log(hbsObject);
    res.render('about', hbsObject);
  });
});
// Export routes
module.exports = router;