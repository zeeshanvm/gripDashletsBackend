var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var  Events = {
    event : {
        type:Schema.type.ObjectId,
        ref:"events"
    }  
};


var PreferencesSchema = mongoose.Schema({

    User:{
        type:Schema.type.ObjectId,
        ref:'User'
    },
    Dashboard:{
        type:Schema.type.ObjectId,
        ref:'Dashboard'
    },
    widgetId:{
        type:Schema.type.ObjectId,
        ref:'Widget'
    },
    subwidgetId: {
        type:'Widget'
    },
    typeId :{
        type:Schema.type.ObjectId,
        ref:'Types'
         
    } ,
    events:[Events]
    



});

mongoose.model('Events', PreferencesSchema);

