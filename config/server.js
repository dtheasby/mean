var express = require('./express'),
    mongoose = require("./mongoose");
    //passport = require("./passport");


var db = mongoose();
var app = express();
//var pass = passport();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');