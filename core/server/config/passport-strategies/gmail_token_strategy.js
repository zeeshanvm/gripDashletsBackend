var GoogleTokenStrategy = require('passport-facebook-token'),
    config = require('../config'),
    winston = require('winston');
var passport = require('passport');

passport.use(new GoogleTokenStrategy({
        clientID: 'AIzaSyA0wr9xEC-AKyjzkHoxgwBPS-eGPhv6QUE',
        clientSecret: ''
    },
    function(accessToken, refreshToken, profile, done) {

    }
));