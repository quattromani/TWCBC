var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('secondary_nav', function(data, category, section, subsection, zoom, options) {

    console.log(category, section, subsection, zoom);

    var category_object = null;
    var section_object = null;
    var subsection_object = null;

    var category_url = null;
    var section_url = null;
    var subsection_url = null;

    category_object = _.find(data, function(item) {
      return !!item.title && !!category && item.title.toLowerCase() === category.toLowerCase();
    });

    if (!!category_object && !!category_object.section && !!category_object.url) {
      category_url = category_object.url;

      section_object = _.find(category_object.section, function(item) {
        return !!item.title && !!section && item.title.toLowerCase() === section.toLowerCase();
      });

      if (!!section_object && !!section_object.subsection && !!section_object.url) {
        section_url = category_url + "/" + section_object.url;

        return new Handlebars.SafeString(buildHTML(section_url, section_object.subsection));

      } else {
        return;
      }

    } else {
      return;
    }

    function buildHTML(start_url, list) {
      // console.log("building html with", "url: " + start_url, "list: " + JSON.stringify(list, null, '  '));
      var html = '<div class="accordion"><div class="expandable"><ul>';

      for (var i = 0; i < list.length; i++) {
        html += '<li class="js-expandable">';

        // console.log(list[i]);

        if (!!list[i].zoom && !!list[i].url && !!list[i].title) {
          html += '<h6>' + list[i].title + '</h6>';
          html += '<ul>';

          for (var j = 0; j < list[i].zoom.length; j++) {
            html += '<li>';

            if (!!list[i].zoom[j].title && !!list[i].zoom[j].url) {
              html += '<a href="/' + start_url + '/' + list[i].url + '#' + list[i].zoom[j].url + '">' + list[i].zoom[j].title + '</a>';

            } else if (!!list[i].zoom[j].title) {
              html += '<a href="/">' + list[i].zoom[j].title + '</a>';
            }

            html += '</li>';
          }

          html += '</ul>';

        } else if (!!list[i].url && !!list[i].title){
          html += '<a href="/' + start_url + '/' + list[i].url + '"><h6>' + list[i].title + '</h6></a>';

        } else if (!!list[i].title) {
          html += '<h6>' + list[i].title + '</h6>';
        }

        html += '</li>';
      }

      html += '</ul></div></div>';

      return html;
    }
  });
};
