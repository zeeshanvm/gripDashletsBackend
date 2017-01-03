var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var events = {
    event: {
        type: Schema.type.ObjectId,
        ref: "events"
    }
};


var widgetSchema = mongoose.Schema({
    vendor: {
        type: String
    },

    events: [events],
    sub_widgets: [], // by trend, lastweek,yesterday
    api_key: {
        type: string
    }

});

mongoose.model('Widgets', widgetSchema);

