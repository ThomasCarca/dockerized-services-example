var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var aireJeuxRouter = require('./routes/airejeux');
var bancRouter = require('./routes/banc');
var barRouter = require('./routes/bar');
var busRouter = require('./routes/bus');
var parkingVeloRouter = require('./routes/parkingvelo');

var app = express();

// Mongoose import
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose connection to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, function (error) {
    if (error) {
        console.log(error);
    }else{
        console.log("Connected to MongoDB")
    }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/airejeux', aireJeuxRouter);
app.use('/banc', bancRouter);
app.use('/bar', barRouter);
app.use('/bus', busRouter);
app.use('/parkingvelo', parkingVeloRouter);

module.exports = app;
