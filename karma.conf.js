module.exports = function (config) {

  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '41'
    },

    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '37'
    },

//    sl_ios_safari: {
//      base: 'SauceLabs',
//      browserName: 'iphone',
//      platform: 'OS X 10.9',
//      version: '7.1'
//    },

//    sl_ie_11: {
//      base: 'SauceLabs',
//      browserName: 'internet explorer',
//      platform: 'Windows 8.1',
//      version: '11'
//    }

  };

  config.set({
    basePath: '.',
    files: [
      './index.js',

      'test/errors.test.js',
      'test/index.test.js'
    ],

    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['dots', 'saucelabs'],
    // browsers: [ 'Chrome' ],
    browsers: Object.keys(customLaunchers),
    customLaunchers: customLaunchers,
    sauceLabs: {
      testName: 'Yield-yield tests'
    },
    singleRun: true
  });

};
