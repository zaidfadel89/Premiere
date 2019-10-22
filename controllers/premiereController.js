var express = require('express');
var router = express.Router();
var premiere = require('../models/premiere.js');
var bcrypt = require('bcrypt');
const login = [];
const users = [];
//Setup Routes

// Index Redirect

router.get('/login', function(req, res) {
  res.render('login.handlebars');
});
router.post('/login', function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    var newlogin = {
      email: req.body.email,
      password: hash
    };

    console.log(newlogin);
    login.push(newlogin);
    console.log('login array');
    console.log(login);
    res.render('index');
  });
});
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

    console.log(newUser);
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
router.get('/', function(req, res) {
  res.redirect('/index');
  // res.render('index');
});

// Index Page
router.get('/index', function(req, res) {
  premiere.selectAllinf(function(data) {
    // console.log(data);

    var list = { info: data };
    //console.log(hbsObject);
    res.render('index', list);
  });
});

// Create a New Burger
router.get('/about/model/:model', function(req, res) {
  premiere.selectOne(req.params.model, function(data) {
    // console.log('model name in routes: ' + req.params.model);
    // console.log('data in premier/models route: ' + JSON.stringify(data));
    var hbsObject = { info: data };
    res.render('about', hbsObject);
  });
});

// <<<<<<< HEAD
// router.get('/about', function(req, res) {
//   premiere.selectAllinf(function(data) {
//     var hbsObject = { info: data };
//     res.render('about', hbsObject);
//   });
// });

// // dealer
// router.get('/dealer', function(req, res) {
//   premiere.selectAllDealer(function(data) {
//     var hbsObject = [{ info: data }, { cars: data }];
//     //console.log(hbsObject);
// =======

// dealer
router.get('/dealer', function(req, res) {
  premiere.selectAllDealer(function(data) {
    var hbsObject = { info: data, cars: data };
    //console.log(hbsObject);
    res.render('dealer', hbsObject);
  });
});

router.post('/dealer/create', function(req, res) {
  premiere.insertAll(req.body.model, function() {
    var hbsObject = { tableall: data };
    console.log('model name in routes: ' + req.body.model);
    console.log('data in premier/models route: ' + JSON.stringify(data));
    res.render('dealer', hbsObject);
  });
});

router.delete('/dealer/create/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
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
