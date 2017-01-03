var GoogleTokenStrategy = require('passport-google-id-token'),
    config = require('../config'),
    winston = require('winston');
var passport = require('passport');


module.exports = function () {


    passport.use(new GoogleTokenStrategy({
            clientID: config.clientID
        },
        function (parsedToken, googleId, done) {
            console.log("===========>",parsedToken);
            var user = {
                email : parsedToken.payload.email
            };
            done(null, user);

        }
    ));
};