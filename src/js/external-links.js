// Open all external links in a new window
$('a[href^="http://"], a[href^="https://"], a[href$=".pdf"]').attr('target','_blank');
$('a[href^=mailto]').attr('target','_self');
