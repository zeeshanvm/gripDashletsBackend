var _glob = require('glob');
var winston = require('winston');
var chalk = require('chalk');

module.exports = function (app) {

    winston.info(chalk.red('Loading Routes files....'));

    var routes = _glob.sync('server/routes/*.routes.js');

    routes.forEach(function (filePath) {
        require('../../' + filePath)(app);
        winston.info('loading Route file', filePath.split('/')[3]);
    });
    winston.info(chalk.green('Loading Routes Complete '));
    return app;
};