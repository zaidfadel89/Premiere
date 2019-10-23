// Import MySQL connection.
var connection = require('../config/connection.js');
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  

  selectAllinf: function(cb) {
    connection.query('SELECT * FROM  cars', function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  selectOne: function(model, cb) {
    // console.log('model: ' + model);
    var query = 'SELECT * FROM  cars where ?';
    // console.log('query *****: ' + query);
    connection.query(query, { model: model }, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },

  

  selectAllDealer: function(cb) {
    connection.query(
      'SELECT * FROM cars JOIN info ON cars.id = info.id',
      function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      }
    );
  },
  // insertComment: function (comment, cb) {
  //   connection.query("SELECT "+comment+ "FROM cars INNER JOIN info ON cars.id = info.carId",
  //      function (err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     });
  // },
     

  createcar: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols;
    queryString += ") ";
    queryString += "VALUES (";
    // queryString += vals;
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table, condition, cb) {
    var queryString = 'DELETE FROM ' + table;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table;
    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


};

module.exports = orm;
