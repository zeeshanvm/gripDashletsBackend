var mixpanelHelper = require('../helpers/mixpanel.helpers');
var promise = require('bluebird');
var standardError = require('standard-error');


function fetchMixpanelData(req, res) {

    mixpanelHelper.fetchMixpanelData(req).then(function (data) {
        sendResponse(res,data)
    }).catch(function (err) {
        sendErroneousResponse(res,err)
    });
}

function sendResponse(res,data) {
res.send({
    status:"Success",
    msgCode:405,
    msgInfo:data

})
}

function sendErroneousResponse(res,data) {
    new promise.reject(new StandardError({
        status:"Error",
        msgCode:data.code,
        msgInfo:data.info
    }));

}


module.exports = {

    fetchMixpanelData: fetchMixpanelData
};