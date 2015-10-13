var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('get_section', function(data, category, section, options) {

    var category_i_want = _.chain(data)
    .find(function(item) {
      return item.title === category;
    })
    .value();

    if (!!category_i_want && !!category_i_want.section) {
      category_i_want = _.find(category_i_want.section, function(item) {
        return item.title === section;
      });

      if (!!category_i_want && !!category_i_want.url) {
        category_i_want = category_i_want.url;
      }
    }

    console.log("Im not an object", category_i_want);

    return category_i_want + "";

  });
};
