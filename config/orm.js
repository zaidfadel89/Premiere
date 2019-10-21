// Import MySQL connection.
var connection = require('../config/connection.js');

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (cb) {
    connection.query('SELECT * FROM cars ', function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  selectAllinf: function (cb) {
    connection.query('SELECT * FROM  info', function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  selectOne: function (model, cb) {
    // console.log('model: ' + model);
    var query = 'SELECT * FROM  info where ?';
    // console.log('query *****: ' + query);
    connection.query(query, { model: model }, function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },

  insertAll: function ( cb) {
    connection.query(" INSERT INTO  tableall SELECT cars.id,cars.make, cars.model,cars.eng_dscr,info.id,info.photo,info.model,info.drive,info.fuelType1,info.VClass,info.trany,info.createdOn,info.fuelCost08 FROM cars INNER JOIN info on cars.model = info.model ",
       function (err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
  },

  selectAllDealer: function (cb) {

    connection.query("SELECT * FROM cars JOIN info ON cars.model = info.model", function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }


};

module.exports = orm;
