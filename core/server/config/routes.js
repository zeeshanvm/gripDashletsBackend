
var _glob = require('glob');
var winston = require('winston');
var chalk = require('chalk');

module.exports = function (app) {

    winston.info(chalk.red('Load Routes files....'));
    var models = _glob.sync('**/server/routes/*.routes.js');
    models.forEach(function (filePath) {
        require('../../../' + filePath)(app);
        winston.info('loading Route file', filePath.split('/')[3]);
    });
    winston.info(chalk.green('Loading Routes Complete '));
    return app;
};