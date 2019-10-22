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
      'SELECT * FROM cars JOIN info ON cars.model = info.model',
      function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      }
    );
  },
  insertComment: function (comment, cb) {
    connection.query("INSERT INTO info set ?",
      {
        comment: comment,
        
      }, function (err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
  },
  // insertDealer: function (all, cb) {
  //   var createdOn = new Date();
  //   var all =   {
  //     id: id,
  //     createdOn: createdOn,
  //     make: make,
  //     model: model,
  //     photo: photo,
  //     eng_dscr: eng_dscr,
  //     VClass: VClass,
  //     createdOn: createdOn,
  //     trany: trany,
  //     fuelCost08: fuelCost08,
  
  //   }
  //   connection.query("INSERT INTO cars set ?", all ,
  //    function (err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     });
  // },

  create: function(table, cols, vals, cb) {
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
  }


};

module.exports = orm;
