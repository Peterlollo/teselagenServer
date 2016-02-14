var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/mean-scaffold');

//Missing middleware/routing functionality here:

app.listen(8000);

module.exports = app;