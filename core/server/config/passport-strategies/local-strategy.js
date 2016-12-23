var LocalStrategy = require('passport-local'),
    config = require('../config'),
    winston = require('winston');
var passport = require('passport');



passport.use(new LocalStrategy(
    function (username, password, done) {
        var user = {};
        // User.findOne({ username: username }, function (err, user) {
        // if (err) { return done(err); }
        // if (!user) { return done(null, false); }
        // if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
        // });
    }
));