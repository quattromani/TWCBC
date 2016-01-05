var path_checker = require('./path_checker');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('on-path', function(this_page, path_name, options) {
    // var path = this_page.page.dirname.split("/");
    // var onpath = false;
    //
    // if (this_page.page.basename === path_name) {
    //   return true;
    // }
    //
    // for (var i = 0; i < path.length; i++) {
    //   // console.log("Path: ", path[i]);
    //   if (path[i] === path_name) {
    //     onpath = true;
    //     break;
    //   }
    // }
    //
    // return onpath;
    return path_checker(this_page.page.basename, this_page.page.dirname, path_name);
  });
};
