var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('get_url_for_secondary_nav', function(data, category, section, options) {

    var category_i_want = null;
    var section_i_want = null;
    var category_url = null;
    var section_url = null;

    category_i_want = _.chain(data)
    .find(function(item) {
      return item.title === category;
    })
    .value();

    if (!!category_i_want && !!category_i_want.url) {
      category_url = category_i_want.url;
    }

    if (!!category_i_want && !!category_i_want.section) {
      section_i_want = _.find(category_i_want.section, function(item) {
        return item.title === section;
      });

      if (!!section_i_want && !!section_i_want.url) {
        section_url = section_i_want.url;
      }
    }

    if (!!category_url && !!section_url) {
      return category_url + "/" + section_url;
    }

    return false;

  });
};
