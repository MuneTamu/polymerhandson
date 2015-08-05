(function() {
  'use strict';

  module.exports = {
    app: {
      ignorePath: /^<%= paths.app %>\/|\.\.\//,
      src: ['<%= paths.app %>/index.html']
    }
  };
})();
