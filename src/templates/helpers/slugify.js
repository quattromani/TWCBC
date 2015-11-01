var _ = require('lodash');

module.exports.register = function (Handlebars, options, params)  {
  Handlebars.registerHelper('slugify', function (component, options) {
    var slug = component.replace(/[^\w\s]+/gi, '').replace(/ +/gi, '-');
    return slug.toLowerCase();
  });
};
// usage: {{toLowerCase someString}}
