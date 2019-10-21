// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var premiere = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },

  selectAllinf: function(cb) {
    orm.selectAllinf(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectOne: function(model, cb) {
    orm.selectOne(model, function(res) {
      cb(res);
    });
  },

  selectAllDealer: function(cb) {
    orm.selectAllDealer(function(res) {
      cb(res);
    });
  }
};
//   updateOne: function(burger_id, cb) {
//     orm.updateOne( burger_id, function(res) {
//       cb(res);
//     });
//   }

// Export the database functions for the controller (catsController.js).
module.exports = premiere;
