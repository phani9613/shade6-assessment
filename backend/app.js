var express = require('express');
var app = express();
var db = require('./db');
var UserController=require('./controllers/UserController')
var EventController=require('./controllers/EventController')
var UserEventController=require('./controllers/UserEventController')
app.use('/user', UserController);
app.use('/event',EventController)
app.use('/userevent',UserEventController)
module.exports = app;