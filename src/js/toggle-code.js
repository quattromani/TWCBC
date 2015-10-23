$('.prettyprint').hide();
$('.toggle-code').click(function (ev) {
  var t = ev.target
  $('#' + $(this).attr('target')).toggle(500, function(){
    $(t).html($(this).is(':visible')? 'Hide Code' : 'Show Code')
  });
  return false;
});
