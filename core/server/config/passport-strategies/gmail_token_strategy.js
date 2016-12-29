var GoogleTokenStrategy = require('passport-google-id-token'),
    config = require('../config'),
    winston = require('winston');
var passport = require('passport');




module.exports = function () {
    console.log("==============>");
    passport.use(new GoogleTokenStrategy({
            clientID: '954209047151-k2itmgrcphucvb497mbgv106ab9sddlf.apps.googleusercontent.com'
            // getGoogleCerts: {}
        },
        function(parsedToken, googleId, done) {

            done(err);

        }
    ));
};