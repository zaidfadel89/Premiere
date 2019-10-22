// Set up MySQL connection.
var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'd6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'vv5uu5prndgku1un',
    password: 'l8psj3qku4txj2zm',
    database: 'zwzbxnwszwd74umz'
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
