var promise = require('bluebird'),
    StandardError = require('standard-error');
userHelper = require('../helpers/user.helper');


function facebookLogin(req, res) {
    return;

};


function Signup(req, res) {

    return userHelper.userSignupAsync(req, res)
        .then(function (data) {
            return sendSuccessResponse(res, data);
        })
        .catch(function (err) {
            return sendErroneousResponse(res, err);
        });
}


function sendSuccessResponse(res, data) {
    res.send({
        status: "Success",
        message_code: data.message_code,
        message_Info: data.message_Info
    })
}

function sendErroneousResponse(res, data) {
   
    return new promise.reject(new StandardError({
        status: "Error",
        message_code: data.message_code,
        message_Info: data.message_Info
    }))
}


module.exports = {
    facebookLogin: facebookLogin,
    Signup: Signup
};