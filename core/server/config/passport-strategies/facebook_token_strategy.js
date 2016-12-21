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
            console.log("========================>",accessToken);
            done();
        }))
};