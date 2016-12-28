'use strict';
var winston = require('winston');
const favicon = require('express-favicon');
var express = require('express'),
    http = require('http'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    flash = require('flash');


var config = require('./config');

module.exports = function (db) {
    var app = express();
    var server = http.createServer(app);
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
        winston.info('NODE_ENV Dev Env Loaded');
        // winston.info(config);

    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
  

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: false,
        secret: config.sessionSecret,
        rolling: true
    }));

    app.set('views', './views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    
    require('./routes')(app);

    app.use(favicon(__dirname + '/../../client/favicon.png'));
    app.get('/', function (req, res) {
        res.render('index');
    });

    return server;


};
