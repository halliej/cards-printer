'use strict';

module.exports = function (options) {
  return [
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply.view('index', {
          recordCount: options.data.length
        });
      }
    },
    {
      method: 'GET',
      path: '/public/{param*}',
      handler: {
        directory: {
          path: 'public'
        }
      }
    }
  ];
};