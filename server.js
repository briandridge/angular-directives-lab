console.log("server.js running");

var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
app.use(express.static('public'));
var bodyParser = require('body-parser');

// var path = require('path');
var cors = require('cors');
// var logger = require('morgan');

var routes = require('./config/routes');

app.use(cors());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});