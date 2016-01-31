var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('concatenate_to', function(value1, value2, delimiter, options) {
    // console.log(value1, value2);
    var new_value = value1 + delimiter + value2;

    return new_value;
  });
};
