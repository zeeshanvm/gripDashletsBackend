
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    profileId :{
        type:String
    },
    fullName :{
        type:String
    },
    email : {
        type:String
    },
    widgets :[ ]


});

mongoose.model('User',userSchema);

