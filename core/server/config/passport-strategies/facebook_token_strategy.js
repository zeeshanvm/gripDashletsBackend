var FacebookTokenStrategy = require('passport-facebook-token'),
    config = require('../config'),
    winston = require('winston');
var passport = require('passport');

module.exports = function () {
    passport.use(new FacebookTokenStrategy({
            clientID: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret
        },
        function (accessToken, refreshToken, profile, done) {
            //TODO    use session managment
            done(null, profile);

        }))
};
