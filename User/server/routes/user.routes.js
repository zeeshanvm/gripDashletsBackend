var passport = require('passport'),
    config = require('../../../core/server/config/config'),
    userController = require('../controllers/user.controller');


function userManagementRoutes(app) {
    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }));
    app.get('/oauth/facebook/callback', passport.authenticate('facebook',
        {
            failureRedirect: '/signin',
            successRedirect: '/'
        }));
    app.post('/auth/facebook/token',
        passport.authenticate('facebook-token'),
        userController.facebookLogin
    );

}

module.exports = function (app) {
    userManagementRoutes(app);
    return app;

};