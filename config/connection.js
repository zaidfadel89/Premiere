// Set up MySQL connection.
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'b1w6ett0jjl0fw9s',
  password: 'ht1pmzgfl0amzyza',
  database: '`oqgf306b39x9ybxi`'
});

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
