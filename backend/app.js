var express = require('express');
var app = express();
var db = require('./db');
var UserController=require('./controllers/UserController')
var EventController=require('./controllers/EventController')
app.use('/user', UserController);
app.use('/event',EventController)
module.exports = app;