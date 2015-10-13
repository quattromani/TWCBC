var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('inherit_url', function(data, parent_url, options) {

    var list = _.chain(data)
      .map(function(item) {
        item.parent_url = parent_url;
        return item;
      })
      .value();

    return list;

    // return options.fn(this);
  });
};
