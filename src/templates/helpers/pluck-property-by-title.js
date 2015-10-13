var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('pluck_property_by_title', function(data, title, property, options) {
    var object_i_want = _.find(data, function(item) {
      return item.title === title;
    });

    var property_i_want = null;

    if (!!object_i_want) {
      property_i_want = object_i_want[property];
    }

    return property_i_want;
    // return item;
  });
};
