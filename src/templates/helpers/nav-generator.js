module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('read_data', function(context, options) {
    console.log("Jeff's helper called");
    // console.log(options);
    console.log(context);
    // console.log("the stuff", params.assemble.options);
    // return options.fn(this);
  });
}
