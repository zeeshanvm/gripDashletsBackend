var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subwidgets = [
    'today',
    'yesterday',
    'weekly,',
    'monthly'

];

var widgetSchema = mongoose.Schema({
   
    events:[],
    vendor: {
        type: String
    },
    name: {
        type: String
    },
    description: {},
    type: {
        enum: subwidgets
    }


});

mongoose.model('Widgets', widgetSchema);

