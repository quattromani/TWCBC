var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('concatenate_to', function(value1, value2, delimiter, options) {
    return value1 + delimiter + value2;
  });
};
