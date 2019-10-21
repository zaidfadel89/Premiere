var express = require('express');
var router = express.Router();
var premiere = require('../models/premiere.js');
var bcrypt = require('bcrypt');

const users = [];
//Setup Routes

// Index Redirect
router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/login', function(req, res) {
  res.render('login.handlebars');
});
router.post('/login', function(req, res) {});
router.get('/register', function(req, res) {
  res.render('register.handlebars');
});
router.post('/register', function(req, res) {
  // (async () => {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    var newUser = {
      name: req.body.name,
      email: req.body.email,
      password: hash
    };

    // console.log(newUser);
    users.push(newUser);
    console.log('users array');
    console.log(users);
    res.render('login');
  });

  // console.log('hp ', hashedPassword);

  // res.redirect('/login');

  // try {
  //   const hashedPassword = bcrypt.hash(req.body.password, 10);
  //   // console.log('hp ', hashedPassword);
  //   console.log('we are in the try');
  //   var newUser = {
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: hashedPassword
  //   };

  //   users.push(newUser);

  //   // users.push({
  //   //   name: req.body.name,
  //   //   email: req.body.email,
  //   //   password: hashedPassword
  //   // });
  //   console.log('users array ', users);
  //   res.redirect('/login');
  // } catch {
  //   res.redirect('/register');
  // }
  // })();
});

// Index Page
router.get('/index', function(req, res) {
  premiere.selectAll(function(data) {
    var list = { cars: data };
    //console.log(hbsObject);
    res.render('index', list);
  });
});

router.get('/index/model', function(req, res) {
  premiere.selectOne(req.body.model, function() {
    res.redirect('/index');
  });
});

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
router.get('/dealer', function(req, res) {
  premiere.selectAllDealer(function(data) {
    var hbsObject = [{ info: data }, { cars: data }];
    //console.log(hbsObject);
    res.render('dealer', hbsObject);
  });
});
// Export routes
module.exports = router;
