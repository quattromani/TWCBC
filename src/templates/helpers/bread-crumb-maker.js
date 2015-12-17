var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('bread-crumb-maker', function(nav_data, base_url, this_page, options) {

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

    var path_array = (this_page.page.dirname + "/" + this_page.page.basename).split("/");
    if (path_array[0] === ".") {
      path_array.shift();
    }

    var url_array = [];
    for (var i = 0; i < path_array.length; i++) {
      var current_url = _.deepFind(nav_data.section, { 'url': path_array[i] });
      url_array[i] = {};

      if (!!current_url) {
        url_array[i].title = current_url.title;
        url_array[i].url = current_url.url;
        // console.log("url_array", url_array[i]);
      }
    }

    // console.log(url_array);

    function buildURls(url_entries, rooturl) {
      var bread_crumbs = {};
      url_entries.unshift({ url: rooturl });
      url_entries.pop();

      for (var j = 0; j < url_entries.length; j++) {
        var new_url = url_entries[j];
        new_url.url = [url_entries[j].url];
        if (j > 0) {
          new_url.url = url_entries[j - 1].url.concat(new_url.url);
        }
      }

      return url_entries;
    }

    return buildURls(url_array, base_url);


    // console.log(url_array);
    // console.log(bread_crumbs);

    // return bread_crumbs;

    // function assign_url(nav_list, url) {
    //   for (var item in nav_list) {
    //     console.log(nav_list[item]);
    //     // if (!!nav_list[item]) {
    //     //   if (!!nav_list[item].url && !Array.isArray(nav_list[item].url)) {
    //     //     if (nav_list[item].url === this_page.page.basename) {
    //     //       nav_list[item].current = true;
    //     //     }
    //     //     var new_url = url.slice();
    //     //     new_url.push(nav_list[item].url);
    //     //     if (new_url[0] !== base_url) {
    //     //       new_url.unshift(base_url);
    //     //     }
    //     //     nav_list[item].url = new_url;
    //     //
    //     //     if (!!nav_list[item].section && Array.isArray(nav_list[item].section)) {
    //     //       assign_url(nav_list[item].section, nav_list[item].url);
    //     //     }
    //     //   }
    //     // }
    //   }
    // }
  });
};
