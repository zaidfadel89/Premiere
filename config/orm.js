// Import MySQL connection.
var connection = require('../config/connection.js');

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    connection.query('SELECT * FROM cars ', function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  selectAllDealer: function ( cb) {
  
    connection.query( "SELECT * FROM cars JOIN info ON cars.model = info.model"  , function (err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
  }

=======
  selectAllinf: function(cb) {
    connection.query('SELECT * FROM  info', function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  selectOne: function(model, cb) {
    console.log('model: ' + model);
    var query = 'SELECT photo, drive FROM  info where ?';
    console.log('query *****: ' + query);
    connection.query(query, { model: model }, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  }

  //   updateOne: function (burgerID, cb) {

  //     connection.query(
  //       "UPDATE  burgers SET ? WHERE ?" ,[{ devoured: true }, { id: burgerID }]


  //       , function (err, result) {
  //         if (err) {
  //           throw err;
  //         }

  //         cb(result);
  //       });
  //   },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
