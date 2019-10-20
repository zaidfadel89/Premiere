// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM cars ", function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
    selectAllinf: function (cb) {
      connection.query("SELECT * FROM  info", function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  selectOne: function (model, cb) {
    connection.query("SELECT model FROM info WHERE model ?  ",
      {
       
        model: model,
        
      }, function (err, result) {
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



};

// Export the orm object for the model (cat.js).
module.exports = orm;