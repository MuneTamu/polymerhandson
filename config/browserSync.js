(function() {
  'use strict';

  module.exports = {
    options: {
      notify: false,
      background: true
    },
    dev: {
      options: {
        files: [
          '<%= paths.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= paths.app %>/images/{,*/}*',
          '<%= paths.app %>/scripts/{,*/}*.js'
        ],
        server: {
          baseDir: ['.tmp', '<%= paths.app %>'],
          routes: {
            '/bower_components': './bower_components'
          }
        }
      }
    }
  };
})();
