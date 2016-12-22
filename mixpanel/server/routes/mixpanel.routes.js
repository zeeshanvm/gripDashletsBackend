var config = require('../../../core/server/config/config'),
    mixpanelController = require('../controllers/mixpanel.controller');



function fetchData(app) {
    app.get(config.api + '/fetchMixpanelData', mixpanelController.fetchMixpanelData);

}

module.exports = function (app) {
    fetchData(app);
    return app;

};