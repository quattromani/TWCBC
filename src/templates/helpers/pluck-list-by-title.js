var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('pluck_list_by_title', function(data, title, options) {

    var list = _.chain(data)
      .map(function(item) {
        return item.section;
      })
      .flatten()
      .find(function(item) {
        return item.title.toLowerCase() === title.toLowerCase();
      })
      .value();

    if (!!list && list.subsection) {
      list = list.subsection;
    }

    return list;
  });
};
