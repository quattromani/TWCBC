Handlebars.registerHelper('toLowerCase', function(value) {
 return (value && _.isString(value)) ? value.toLowerCase() : '';
});
// usage: {{toLowerCase someString}}
