var express = require('express');
var app = express();
var server = require('http').createServer(app)
var _ = require('lodash');

var runningPortNumber = process.env.PORT || 8080;

app.use(express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/assets', express.static(__dirname + '/assets'));

server.listen(runningPortNumber, '0.0.0.0');
