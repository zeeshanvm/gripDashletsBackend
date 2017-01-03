var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    profileId: {
        type: String

    },
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    profileType:{
        type: String
    }   ,
    dummy:{type:Object}

});



mongoose.model('User', userSchema);

