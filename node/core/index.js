'use strict';
const Path = require('path');
/* eslint-disable global-require */
function core(server, options, next) {
  server.route(require('./routes')(options));

  server.views({
    engines: {
      html: require('handlebars')
    },
    path: Path.join(__dirname, '../views')
  });

  server.register({
    register: require('./main'),
    options: {
      data: options.data
    }
  }, error => {
    if (error) {
      console.log('There was an error loading the main plugin!');
    }
  });

  return next();
}

core.attributes = {
  name: 'core',
  dependencies: ['inert', 'vision']
};

module.exports = core;
