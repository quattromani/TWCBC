var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('bread_crumbs', function(data, base_url, category, section, subsection, zoom, options) {

    return new Handlebars.SafeString(buildHTML(base_url, data));

    function buildHTML(start_url, list) {
      var html = '<div class="twc-breadcrumbs"><div class="twc-container"><ul class="horizontal slashes">';
      html += '<li><a analyticsname="" href="' + start_url + '.html">Editorial Framework &amp; Style Guide</a></li>';

      for (var i = 0; i < list.length; i++) {
        if (!!list[i].url && !!list[i].title && list[i].title === category) {
          var category_url = start_url + '/' + list[i].url;
          html += '<li><a analyticsname="" href="' + category_url + '.html">' + list[i].title + '</a></li>';

          if (!!list[i].section) {
            for (var j = 0; j < list[i].section.length; j++) {
              if (!!list[i].section[j].url && !!list[i].section[j].title && list[i].section[j].title === section) {
                var section_url = category_url + '/' + list[i].section[j].url;
                html += '<li><a analyticsname="" href="' + section_url + '.html">' + list[i].section[j].title + '</a></li>';

                if (!!list[i].section[j].subsection) {
                  for (var k = 0; k < list[i].section[j].subsection.length; k++) {
                    if (!!list[i].section[j].subsection[k].url && !!list[i].section[j].subsection[k].title
                    && list[i].section[j].subsection[k].title === subsection) {
                      var subsection_url = section_url + '/' + list[i].section[j].subsection[k].url;
                      html += '<li><a analyticsname="" href="' + subsection_url + '.html">' + list[i].section[j].subsection[k].title + '</a></li>';

                      if (!!list[i].section[j].subsection[k].zoom) {


                        for (var l = 0; l < list[i].section[j].subsection[k].zoom.length; l++) {
                          // console.log(list[i].section[j].subsection[k].zoom[l].title + " == " + zoom);
                          if (!!list[i].section[j].subsection[k].zoom[l].url && !!list[i].section[j].subsection[k].zoom[l].title
                          && list[i].section[j].subsection[k].zoom[l].title === zoom) {
                            var zoom_url = subsection_url + '.html#' + list[i].section[j].subsection[k].zoom[l].url;
                            html += '<li><a analyticsname="" href="' + zoom_url + '">' + list[i].section[j].subsection[k].zoom[l].title + '</a></li>';
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      html += '</ul></div></div>';

      return html;
    }
  });
};

//TODO: ugh this should be done recursively
