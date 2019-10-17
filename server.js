var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var app = express();
var PORT = process.env.PORT || 3000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var connect = mysql.createConnection({});
app.listen(PORT, function() {
  console.log('Server listing on:' + PORT);
});
