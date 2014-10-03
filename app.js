'use strict';

var a127 = require('a127-magic');
var express = require('express');
var app = express();

// configure usergrid-objects
var config = a127.config.load();
var Usergrid = require('usergrid-objects')(config.usergrid);

// ensure body is parsed
var bodyParser = require('body-parser');
app.use(bodyParser);

// use apigee-127
app.use(a127.middleware());

var server = app.listen(process.env.PORT || 10010, function() {
  console.log('Listening on port %d', server.address().port);
});
