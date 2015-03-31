/*eslint-env node*/
'use strict';

describe('Promise', function () {
  
  var yy = require('yield-twice');
  var fs = require('fs');
  var expect = require('chai').expect;
  var promise = require('promise');

  it('should run promise and return its value', function (done) {

    var getUsername = function () {
      var p = new Promise(function (res, rej) {
        setTimeout(function () {
          res('Maks Nemisj');
        }, 50);
      });
      return p;
    };

    var fnc = yy(function *() {
      var name = yield getUsername();
      expect(name).to.be.equal('Maks Nemisj');
    });

    fnc(function (err) {
      return done();
    });

  });

  it('should run promise and return error if occured', function (done) {
    var message = 'Promise Error #' + ~~(Math.random() * 1000);

    var getUsername = function () {
      var p = new Promise(function (res, rej) {
        setTimeout(function () {
          rej(message);
        }, 50);
      });
      return p;
    };

    var fnc = yy(function *() {
      // this one will throw error and willstop
      var name = yield getUsername();
    });

    fnc(function (err) {
      expect(err).to.equal(message);
      return done();
    });
  });

});