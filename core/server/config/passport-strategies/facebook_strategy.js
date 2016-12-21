var FacebookStrategy = require('passport-facebook').Strategy,
    config = require('../config'),
    winston = require('winston');
var passport = require('passport');

module.exports = function () {

    passport.use(new FacebookStrategy({
            clientID: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            callbackURL: config.facebook.callbackURL,
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {
            winston.log("=================================  LoggedIN");
            done();
        }))
};