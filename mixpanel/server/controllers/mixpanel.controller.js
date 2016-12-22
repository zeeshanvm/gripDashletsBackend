var MixpanelExport = require('mixpanel-data-export-node');


function fetchMixpanelData (req,res){
    var panel = new MixpanelExport({
        api_key: "cb27bc2651bedeb233d2a07cb502712a",
        api_secret: "1cc0531a4b11d6b5b028cac63fe7c59f"
    });
    panel.export({
        from_date: "2016-12-01",
        to_date: "2016-12-22"

    }).then(function(data) {
        console.log(data);
    });
    res.send("OK");
}


module.exports = {
  
    fetchMixpanelData : fetchMixpanelData
};