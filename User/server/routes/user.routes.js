var passport = require('passport'),
    config = require('../../../core/server/config/config'),
    userController = require('../controllers/user.controller'),
    coreMiddleware = require('../../../core/server/middlewares/core.middleware');

    


function userManagementRoutes(app) {
    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }));

    app.get('/oauth/facebook/callback', passport.authenticate('facebook',
        {
            failureRedirect: '/signin',
            successRedirect: '/'
        }));

    // access_token , refresh_token are required in body
    app.post(config.api+'/auth/facebook/token',
        passport.authenticate('facebook-token'),
        userController.facebookLogin
    );


    // access_token , refresh_token  in body
    app.post('/auth/google',coreMiddleware.setClientID, passport.authenticate('google-id-token'),
        function(req, res) {
            res.send(req.user);
        });

    app.post(config.api+'/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        });

    app.post(config.api+'/signUp',userController.Signup)

}

module.exports = function (app) {
    userManagementRoutes(app);
    return app;

};