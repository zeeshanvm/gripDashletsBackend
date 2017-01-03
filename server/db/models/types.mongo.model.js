var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var typesSchema = mongoose.Schema({
    name: {
        type: String
    } 

});

mongoose.model('Types', typesSchema);

