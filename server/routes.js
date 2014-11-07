/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // authentication middleware
  app.use('/auth', require('./auth'));

  // api middleware
  app.use('/api/groups',  require('./api/group'));
  app.use('/api/service', require('./api/service'));
  app.use('/api/users',   require('./api/user'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
