// Generated on 2014-08-14 using generator-wix-angular 0.1.72
'use strict';

module.exports = function (grunt) {
  var unitTestFiles = [];
  require('./karma.conf.js')({set: function (karmaConf) {
    unitTestFiles = karmaConf.files.filter(function (value) {
      return value.indexOf('bower_component') !== -1;
    });
  }});
  require('wix-gruntfile')(grunt, {
    staging: 'pizza', //modify to your staging environment
    subdomain: 'www', //modify to your sub-domain
    cdnify: 'vm',
    port: 9000,
    preloadModule: 'angularMemoryGameAppInternal',
    translationsModule: 'angularMemoryGameTranslations',
    unitTestFiles: unitTestFiles,
    protractor: true
  });

  //Follow this URL for instructions on how to override built-in definitions:
  //https://github.com/wix/wix-gruntfile/blob/master/README.md
};
