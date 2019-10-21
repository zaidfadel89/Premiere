var express = require('express');
var router = express.Router();
var premiere = require('../models/premiere.js');

//Setup Routes

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page
router.get('/index', function (req, res) {
  premiere.selectAllinf(function (data) {
    var list = { info: data };
    //console.log(hbsObject);
    res.render('index', list);
  });
});



// Create a New Burger
router.get('/about/model/:model', function (req, res) {
  premiere.selectOne(req.params.model, function (data) {
    // console.log('model name in routes: ' + req.params.model);
    // console.log('data in premier/models route: ' + JSON.stringify(data));
    var hbsObject = { info: data };
    res.render('about', hbsObject);
  });
});


// dealer
router.get('/dealer', function (req, res) {
  premiere.selectAllDealer(function (data) {
    var hbsObject = { info: data , cars: data };
    //console.log(hbsObject);
    res.render('dealer', hbsObject);
  });
});

router.post('/dealer/create', function (req, res) 
{
  premiere.insertAll(req.body.model, function() 
  {
    var hbsObject = { tableall: data  };
      console.log('model name in routes: ' + req.body.model);
    console.log('data in premier/models route: ' + JSON.stringify(data));
    res.render('dealer', hbsObject);
  });
});


router.delete("/dealer/create/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log('model name in routes: ' + condition);
  premiere.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes
module.exports = router;


