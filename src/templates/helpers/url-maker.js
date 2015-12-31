module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('url-maker', function(url_list, type, options) {
    var url;
    if (type === 'jump') {
      // console.log(JSON.stringify(url_list[], null, 2));
      // slice at 0 to 2 to just get the sectional page
      url = url_list.slice(0, 2).join('/') + '.html' + '#' + url_list[url_list.length - 1];
      // console.log(url);
    } else {
      url = url_list.join('/') + '.html';
    }

    return url;
  });
};
