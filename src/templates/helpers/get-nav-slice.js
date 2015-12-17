var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('get-nav-slice', function(data, this_page, start_at, base_url, options) {

    // Lodash Mixin
    _.mixin({"deepFind": deepFind});

    function deepFind(items, attrs) {
      function match(value) {
        for (var key in attrs) {
          if(!_.isUndefined(value)) {
            if (attrs[key] !== value[key]) {
              return false;
            }
          }
        }

        return true;
      }

      function traverse(value) {
        var result;

        _.forEach(value, function (val) {
          if (match(val)) {
            result = val;
            return false;
          }

          if (_.isObject(val) || _.isArray(val)) {
            result = traverse(val);
          }

          if (result) {
            return false;
          }
        });

        return result;
      }

      return traverse(items);
    }
    // End Lodash Mixin

    function assign_url(nav_list, url) {
      for (var item in nav_list) {
        if (!!nav_list[item]) {
          if (!!nav_list[item].url && !Array.isArray(nav_list[item].url)) {
            if (nav_list[item].url === this_page.page.basename) {
              nav_list[item].current = true;
            }
            var new_url = url.slice();
            new_url.push(nav_list[item].url);
            if (new_url[0] !== base_url) {
              new_url.unshift(base_url);
            }
            nav_list[item].url = new_url;

            if (!!nav_list[item].section && Array.isArray(nav_list[item].section)) {
              assign_url(nav_list[item].section, nav_list[item].url);
            }
          }
        }
      }
    }

    var path_array = (this_page.page.dirname + "/" + this_page.page.basename).split("/");
    if (path_array[0] === ".") {
      path_array.shift();
    }
    start_at = start_at >= 0 ? start_at : 0;
    var nav_data = {};
    nav_data.section = _.deepFind(data.section, { 'url': path_array[start_at] });
    assign_url(nav_data, path_array.slice(0, start_at));
    // console.log("with urls", JSON.stringify(nav_data, null, 2));
    // console.log("base url", base_url);
    return nav_data.section;
  });
};
