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

  return next();
}

core.attributes = {
  name: 'core'
};

module.exports = core;
