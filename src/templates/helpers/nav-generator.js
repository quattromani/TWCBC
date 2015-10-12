var _ = require('lodash');

module.exports.register = function(Handlebars, options, params) {
  Handlebars.registerHelper('read_data', function(data, options) {
    console.log("Jeff's helper called");
    // console.log(JSON.stringify(data, null, '  '));


    function traverseTo(dataset, title) {
      var keys = _.keys(dataset);

      for (var key in keys) {
        var list = dataset[keys[key]];

        if (Array.isArray(list)) {
          console.log("is list");

          for (var i = 0; i < list.length; i++) {
            var entry = list[i];
            console.log(entry);

            if (!!entry.title) {
              console.log(entry.title);

              if (entry.title === title) {
                return entry;
              }

              return traverseTo(entry, title);
            }

            console.log("no item with title " + title + " found");
          }
        }
      }
    }

    traverseTo(data, "Toolkit");
    // console.log(JSON.stringify(traverseTo(data, "Toolkit"), null, '  '));



    // return options.fn(this);
  });
};
