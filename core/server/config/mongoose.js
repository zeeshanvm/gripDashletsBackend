/**
 * Created by Asif on 3/12/2016.
 */

'use strict'; //NOSONAR

var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var _ = require('lodash');
var config = require('./config');
var winston = require('./winston');
var _glob = require('glob');
var moment = require('moment'),
chalk = require('chalk') ;

winston.info('Initializing MongoDB...');
module.exports = function () {
    mongoose.set('debug', true);
    var db = mongoose.connect(config.db);

    mongoose.connection.on('error', console.error.bind({console: 'db connecton error'}));
    mongoose.connection.once('open', function () {
        winston.info('database is connected');
    });
    // Load Model Files Here
    winston.info(chalk.green('Loading  Models files ...'));
    var models = _glob.sync('**/server/models/*.mongo.model.js');
    models.forEach(function (filePath) {

        require('../../../' + filePath);
        winston.info('loading model', filePath.split('/')[3]);
    });
    winston.info(chalk.green('Models loaded Successfully'));

    return db;
};




