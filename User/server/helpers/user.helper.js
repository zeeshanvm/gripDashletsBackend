
var passport = require('passport'),
    config = require('../../../core/server/config/config'),
    userController = require('../controllers/user.controller');

function userSignupAsync(req,res,next){
    console.log("=============",req.body);
    return ;
}



module.exports = {
    userSignupAsync : userSignupAsync
};