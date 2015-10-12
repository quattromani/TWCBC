var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('pluck_list_by_title', function(data, title, options) {
    console.log("Jeff's helper called", title);
    // console.log(JSON.stringify(data, null, '  '));

    var list = _.chain(data.category)
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
    console.log(list);

    return list;

    // return options.fn(this);
  });
};
