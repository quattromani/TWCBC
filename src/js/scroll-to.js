$('a[href*=#]:not([href=#])').click(function() {

  var windowWidth = $("body").width();
  var offset = windowWidth > 1020 ? $('nav') : $('header[role=banner]');
  var offset_height = offset.outerHeight();

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
           scrollTop: target.offset().top - headerHeight
      }, 600);
      return false;
    }
  }
});

var jump_anchors = $(".jumpTo-anchor");

$(window).scroll(function() {
  var offset = $(window).scrollTop();
  var current_anchor;

  for (var i = 0; i < jump_anchors.length; i++) {
    var this_anchor = $(jump_anchors).eq(i);

    if (this_anchor.offset().top - offset > 450) {
      break;
    }

    current_anchor = this_anchor;
  }

  var nav_target = $('a[href*="#' + current_anchor.attr('id') + '"]');

  if (nav_target.parent().parent().parent().hasClass('js-expandable')) {
    nav_target = nav_target.parent().parent().parent();
  } else {
    nav_target = nav_target.parent();
  }

  if (!nav_target.hasClass('js-active')) {
    console.log("changing because " + current_anchor.attr('id'));

    $('aside .accordion .js-expandable ul').slideUp();
    $('aside .accordion li').removeClass("js-active js-open");
    nav_target.find('ul').slideDown();
    nav_target.addClass("js-active");
  }
});
