var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('json', function(data, options) {
    return JSON.stringify(data, null, '  ');
  });
};
