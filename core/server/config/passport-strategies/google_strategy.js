var GoogleTokenStrategy = require('passport-google-token').Strategy,
    config = require('../config'),
    winston = require('winston');
var passport = require('passport');

module.exports = function () {
    passport.use(new GoogleTokenStrategy({
            clientID: "954209047151-k2itmgrcphucvb497mbgv106ab9sddlf.apps.googleusercontent.com",
            clientSecret: "0rC_kr4pGosF7tAyU6GLKOtA"
        },
        function(accessToken, refreshToken, profile, done) {
            console.log("Helllo");
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //     return done(err, user);
            // });
        }
    ));
};