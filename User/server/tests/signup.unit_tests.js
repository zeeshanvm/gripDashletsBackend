var Promise = require('bluebird'),
    mongoose = require('mongoose'),
    assert = require('assert'),
    sinon = require('sinon'),
    chai = require('chai'),
    chaiAsPromised = require("chai-as-promised"),
    expect = chai.expect;
chai.use(chaiAsPromised);
chai.should();

// require file in which functionality should be tested

var castingBoardChildeMongoHelper = require('../../../app/helpers/casting_board_child.mongo.helper.js');


describe('addArchiveRolesAsync Suite', function () {

    var castingBoard = '';
    var boardHistory = '';
    var candidateRequirement = '';
    var body, user = '';

    before('Load required dependencies', function (done) {

        // loading  mongo models

        castingBoard = mongoose.model('castingBoard');
        candidateRequirement = mongoose.model('candidateRequirement');
        boardHistory = mongoose.model('boardHistory');

        // initialize arguments required
        body = {
            boardId: 121231,
            userId: 12,
            createdByUser: 123,
            musicalWorkId: 12,
        };

        user = {
            Id: 12,
            name: 'James',
            profile_image: null
        };

        done();
    });

    it('Should Pass addArchiveRolesAsync Unit Tests', function (done) {


        //test functionality
        var req = {
            body: body,
            user: user,
        };

        castingBoardChildeMongoHelper.addArchiveRolesAsync('57711417c4139e941c51691d', 12, '57511417c4139e941c51691d', false, 12, "suprano emoita", null).then(function (res) {


            // should only get object in when all functionality works fine
            res.should.be.object;

            done();
        });

    });

    it('Should Expect Error from addArchiveRolesAsync functionality  when boardId is not Provided ', function (done) {
        castingBoardChildeMongoHelper.addArchiveRolesAsync('', 12, '57511417c4139e941c51691d', false, 12, "suprano emoita", null).then(null, function (err) {
            err.status.should.equal('Error');
            done();

        });

    });

    it('Should Expect Error from addArchiveRolesAsync functionality  when roleId is not Provided ', function (done) {
        castingBoardChildeMongoHelper.addArchiveRolesAsync('57511417c4139e941c51691d', null, '57511417c4139e941c51691d', false, 12, "suprano emoita", null).then(null, function (err) {
            err.status.should.equal('Error');
            done();

        });

    });

    it('Should Expect Error from addArchiveRolesAsync functionality  when roleObjsId is not Provided ', function (done) {
        castingBoardChildeMongoHelper.addArchiveRolesAsync('57511417c4139e941c51691d', 12, '', false, 12, "suprano emoita", null).then(null, function (err) {
            err.status.should.equal('Error');
            done();

        });

    });





});


