// Import MySQL connection.
var connection = require('../config/connection.js');
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}
// testing
// Object for all our SQL statement functions.
var orm = {
  // selectAll: function(cb) {
  //   connection.query('SELECT * FROM cars ', function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // },

  // <<<<<<< HEAD
  //   selectAllDealer: function(cb) {
  //     connection.query(
  //       'SELECT * FROM cars JOIN info ON cars.model = info.model',
  //       function(err, result) {
  // =======

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

  //   connection.query(
  //     ' INSERT INTO  tableall SELECT cars.id,cars.make, cars.model,cars.eng_dscr,info.id,info.photo,info.model,info.drive,info.fuelType1,info.VClass,info.trany,info.createdOn,info.fuelCost08 FROM cars INNER JOIN info on cars.model = info.model ',
  //     function(err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     }
  //   );
  // },

  // selectAllinf: function(cb) {
  //   connection.query('SELECT * FROM  info', function(err, result) {});
  // },

  selectAllDealer: function(cb) {
    connection.query('SELECT * FROM cars ', function(err, result) {
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

  // <<<<<<< HEAD
  //   //   updateOne: function (burgerID, cb) {

  //   //     connection.query(
  //   //       "UPDATE  burgers SET ? WHERE ?" ,[{ devoured: true }, { id: burgerID }]

  //   //       , function (err, result) {
  //   //         if (err) {
  //   //           throw err;
  //   //         }
  // =======
  // >>>>>>> 203faec08b94441bc010e29057cc0999de9fa299
};

module.exports = orm;
