process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./server/config/express'),
    conf = require('./server/config/config'),
    mongoose = require('./server/config/mongoose'),
    winston = require('./server/config/winston'),
    chalk = require('chalk'),
    passport = require('./server/config/passport');
    passport();
var db = mongoose();

var app = express(db);
app.listen(conf.port);
winston.info(chalk.yellow('Express app started on port ' + conf.port));

module.exports = app;


