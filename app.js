process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./core/server/config/express'),
    conf = require('./core/server/config/config'),
    mongoose = require('./core/server/config/mongoose'),
    winston = require('./core/server/config/winston'),
    chalk = require('chalk'),
    passport = require('./core/server/config/passport');
    passport();
var db = mongoose();

var app = express(db);
app.listen(conf.port);
winston.info(chalk.yellow('Express app started on port ' + conf.port));

module.exports = app;


