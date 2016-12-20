var path = require('path');
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
module.exports.rootPath = path.normalize(__dirname + '/..');
module.exports.sessionSecret = 'S3s3ion$3cr3t';
