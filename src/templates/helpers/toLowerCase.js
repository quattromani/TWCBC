var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('toLowerCase', function(value) {
    return (value && _.isString(value)) ? value.toLowerCase() : '';
  });
};
// usage: {{toLowerCase someString}}
