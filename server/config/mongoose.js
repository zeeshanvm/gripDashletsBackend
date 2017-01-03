var mongoose = require('mongoose'),
    winston = require('winston'),
    chalk = require('chalk'),
    _glob = require('glob');

var config = require('./config');

module.exports = function () {
    var connect = mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
        winston.info(chalk.green("Database Connected"));
    });
    db.on('disconnected', function () {
        winston.info(chalk.red("Database Disconnected"));
    });
    winston.info(chalk.red('Loading Models files....'));
    var models = _glob.sync('../models/*.mongo.model.js');
    models.forEach(function (filePath) {
        require('../../../' + filePath);
        winston.info('loading Route file', filePath.split('/')[3]);
    });
    winston.info(chalk.green('Loading Models Complete '));
     return connect;
};