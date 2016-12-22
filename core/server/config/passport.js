//'use strict'; //NOSONAR
var passport = require('passport');
var winston = require('./winston');
//


module.exports = function () {
    //Serialize sessions
    passport.serializeUser(function (user, done) {
        return done(null, user.id);

    });

    passport.deserializeUser(function (id, done) {
        return db.User.find({where: {id: id}}).then(function (user) {
            if (!user) {
                winston.warn('Logged in user is not found in database, user is possibly deleted post-login');
                return done(null, false);
            }
            winston.info('Session: { id: ' + user.id + ', username: ' + user.username + ' }');
            return done(null, user);
        }).catch(function (err) {
            return done(err, null);
        });
    });

    require('./passport-strategies/facebook_strategy')();
    require('./passport-strategies/facebook_token_strategy')();
};


