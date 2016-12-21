var passport = require('passport'),
    config = require('../../../core/server/config/config');


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
        function (req, res) {
            // do something with req.user
            res.send(req.user? 200 : 401);
        }
    );

}

module.exports = function (app) {
    userManagementRoutes(app);
    return app;

};