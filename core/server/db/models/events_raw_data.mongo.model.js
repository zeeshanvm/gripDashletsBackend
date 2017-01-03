
var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    eventId : {
        type:String
    },
    Data:{
        type:Object
    },
    vendor : {
        type:String
    }
});

mongoose.model('events_data',eventSchema);

