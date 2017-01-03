var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var widgetSchema = mongoose.Schema({

    vendor: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type:Text
    }
    


});

mongoose.model('Events', widgetSchema);

