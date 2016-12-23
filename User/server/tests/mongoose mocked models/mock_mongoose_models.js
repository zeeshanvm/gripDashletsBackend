var Promise = require('bluebird'),
    mongoose = require('mongoose'),
    assert = require('assert'),
    sinon = require('sinon'),
    chai = require('chai'),
    config = require('../config/config'),
    chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();

// require mongoose

var mongoose = require('mongoose');

// create connection
mongoose.connect(config.mongodb.uri);

// load all Schemas
require('../../../../User/server/models/user.mongo.model');

// loading  mongo models

var User = mongoose.model('User');


var userFindOne;
var userFind;
var userFindById;
var userFindByIdAndUpdate;
var userFindOneAndUpdate;

// stub functionality
function stubMongoosefunctionality() {
    var userObj = {
        update: function () {
            //  do any thing that your function demands
            return Promise.resolve({})
        },
        save: function () {

            return Promise.resolve(this);
        },
        toObject: function () {
            //  do any thing that your function demands
            return Promise.resolve({});
        }

    };
    // stub user's findById Function's functionality
    userFindById = sinon.stub(User, 'findById').returns(
        userObj
    );


    // stub users's FindOne
    userFindOne = sinon.stub(User, 'findOne').returns(
        userObj
    );


    // stub user's findOneAndUpdate Function's functionality
    userFindOneAndUpdate = sinon.stub(userObj, 'findOneAndUpdate').returns(
        userObj
    );
}

stubMongoosefunctionality();

exports.Restore = function () {
    userFindOne.restore();
    userFind.restore();
    userFindById.restore();
    userFindByIdAndUpdate.restore();
    userFindOneAndUpdate.restore();
};
exports.retain = function () {
    stubMongoosefunctionality();
};





