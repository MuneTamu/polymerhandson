'use strict';

module.exports = function(grunt) {
  //time-module module read
  require('time-grunt')(grunt);

  //load-grunt-tasks module read
  require('load-grunt-tasks')(grunt);

  //optins setting
  var options = {
    paths:{
      app: 'app',
      dirt: 'dist'
    }
  };

  //config setting & load-grunt-configs read
  var configs = require('load-grunt-configs')(grunt, options);

  //config initialize
  grunt.initConfig(configs);

  //grunt task setting
  grunt.registerTask('serve', function(target) {
    grunt.task.run([
      'wiredep',
      'browserSync:dev',
      'watch'
    ]);
  });
};
