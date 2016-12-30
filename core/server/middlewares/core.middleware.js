var config = require('../config/config');
var promise = require('bluebird');
var standardError = require('standard-error');


function setClientID(req, res, next) {
    if (req.body.deviceType === 'Android') {
        config.clientID = config.androidClientID;
        next();
    }
    else if (req.body.deviceType === 'iOS') {
        config.clientID = config.iOSClientID;
        next();
    }
    else {
        sendErrorResponse(res,'unknown DeviceToken')
    }
}

function sendErrorResponse(res, message) {
    res.send({
        Status: "Error",
        msginfo: message,
        msgCode: 500
    })
}
module.exports = {
    setClientID: setClientID

};