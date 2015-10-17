var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('primary_nav', function(data, base_url, options) {

    function buildHTML(start_url, list) {
      var html = '<nav role="navigation"><div class="twc-container"><ul class="navigation menu">';

      for (var i = 0; i < list.length; i++) {
        html += '<li class="js-expandable">';

        if (!!list[i].section && !!list[i].url && !!list[i].title) {
          html += '<a href="' + start_url + '/' + list[i].url + '.html">';
          html += '<span>' + list[i].title + '</span>';
          html += '</a>';
          html += '<ul>';

          for (var j = 0; j < list[i].section.length; j++) {
            html += '<li>';

            if (!!list[i].section[j].title && !!list[i].section[j].url) {
              html += '<a href="' + start_url + '/' + list[i].url + '/' + list[i].section[j].url + '.html">';
              html += '<span>' + list[i].section[j].title + '</span>';
              html += '</a>';
            }

            html += '</li>';
          }

          html += '</ul>';

        }

        html += '</li>';
      }

      html += '</ul></div></nav>';

      return html;
    }

    return new Handlebars.SafeString(buildHTML(base_url, data));
  });
};
