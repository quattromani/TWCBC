module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('url-maker', function(url_list, type, options) {
    var url;
    if (type === 'jump') {
      url = url_list.slice(0, url_list.length - 1).join('/') + '.html' + '#' + url_list[url_list.length - 1];
    } else {
      url = url_list.join('/') + '.html';
    }
    // console.log(url);

    return url;
  });
};
