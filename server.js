// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var server = http.Server(app);

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});
