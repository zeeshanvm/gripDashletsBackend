
var passport = require('passport'),
    config = require('../config/config'),
    userController = require('../controllers/user.controller');

function userSignupAsync(req,res,next){
    console.log("=============",req.body);
    return ;
}



module.exports = {
    userSignupAsync : userSignupAsync
};