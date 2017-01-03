var MixpanelExport = require('mixpanel-data-export-node');
var promise = require('bluebird');
var standardError = require('standard-error');

function fetchMixpanelData(req) {
    var panel = new MixpanelExport({
        api_key: "cb27bc2651bedeb233d2a07cb502712a",
        api_secret: "1cc0531a4b11d6b5b028cac63fe7c59f"
    });

  return  panel.export({
        from_date: "2016-12-01",
        to_date: "2016-12-22"

    }).then(function (data) {
     return data
    }).catch(function (err) {
      return promise.reject(new standardError({
          data :err
      }))
  });

}


module.exports = {

    fetchMixpanelData: fetchMixpanelData
};