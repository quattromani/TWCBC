var smallBreakPoint = 640;
var mediumBreakPoint = 768;
;/* ==========================================================================
    Prototype Tools -- Version: 1.9.0.2 - Updated: 1/20/2014
   ========================================================================== */

// For DEMO site only - DO NOT EVER INGEST THESE !!

//calculate the time before calling the function in window.onload
var beforeload = (new Date()).getTime();

function getPageLoadTime() {
    //calculate the current time in afterload
    var afterload = (new Date()).getTime();
    // now use the beforeload and afterload to calculate the seconds
    var seconds = (afterload - beforeload) / 1000;
    // Place the seconds in the innerHTML to show the results
    $('.loadtime').text( + seconds + ' sec');
}
window.onload = getPageLoadTime;

// Toggle between print view and web view
$('#toggleMedia').click(function() {
    var currCSS = document.getElementById('printCSS');
    if ($.trim($(this).text()) === 'print view') {
        $(this).text('web view');
    } else {
        $(this).text('print view');
    }
    if (currCSS.media == 'all') {
        currCSS.media = 'print';
    } else {
        currCSS.media = 'all';
    }
    return false;
});

// Add a 'fold' line to prototype in mobile only
var overlay = jQuery('<div class="fold"> </div>');
$(window).resize(function() {
    overlay.appendTo(document.body);
}).resize();

// Calculate the viewport size on prototype site
$(window).resize(function() {
    $('.viewport').empty().append($(window).width(), "x", $(window).height());
}).resize();;/* ==========================================================================
    ComponentName -- Version: 1.9.0.2 - Updated: 3/21/2014
   ========================================================================== */

(function($) {

  $.fn.componentName = function() {

  }

}(jQuery));

$('.componentName').componentName();;/* ==========================================================================
    Styleguide -- Version: 0.4.1 - Updated: 2/22/2014
    ========================================================================== */

// Create Hex color code from color return
function hexc(colorval) {
	var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	delete(parts[0]);
	for (var i = 1; i <= 3; ++i) {
		parts[i] = parseInt(parts[i]).toString(16);
		if (parts[i].length == 1) parts[i] = '0' + parts[i];
	}
	color = '#' + parts.join('');
}

// Get color value of swatch and print to div
var color = '';
$('.swatch').each(function() {
	var classList = $(this).children('.swatch-color').attr('class').split(' ');
	for(i=0; i <= classList.length-1; i++){
		if(classList[i].match(/color-/g)){
			$(this).children('.swatch-info').prepend('<p>$' + classList[i] + '</p>');
			break;
		}
	}
	var x = $(this).children('.swatch-color').css('backgroundColor');
	hexc(x);
	$(this).children('.swatch-info').append('<p>' + color + '</p>');
	$(this).children('.swatch-info').append('<p>' + x + '</p>');
});

(function($) {

	$.fn.vs = function() {
        // View source buttons
        $('.vs').click(function(){
        	$(this).parent().next().find('.prettyprint').toggle();
        	$(this).not('.disabled').toggleClass('js-active');
        	return false;
        });
      }

    }(jQuery));

$('.vs').vs();

// Get font-family property and return
$('.fonts').each(function(){
	var fonts = $(this).css('font-family');
	$(this).prepend(fonts);
});

// Make room for the fixed header
headerHeight = $('header[role=banner]').height();

$(window).on("resize", function () {
  if ($(window).width() > mediumBreakPoint) {
    $('.twc-bc-container').css('margin-top', headerHeight);
    $('aside').css("cssText", "height: " + headerHeight + " !important;");
  } else {

  }
}).resize();

// Disable click on tooltip link - this is not the native functionality
$('.tooltip').click(function(e) {
  e.preventDefault();
});

// Disable click on tooltip link - this is not the native functionality
$('.example').click(function(a) {
  a.preventDefault();
});
;/* ==========================================================================
    Accordion -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$('.accordion .expandable ul li').each(function() {
	if ($(this).has('ul').length) {
		$(this).addClass('js-expandable');
	} else {
		$(this).addClass('js-notexpandable');
	}
	//check for expand cookie and slideDown() active
	if ($.cookie('js-expand') && $(this).find('.expandable h6').text() === $.cookie('js-expand')) {
		$(this).find('ul').slideDown();
	}
});
//open first nav item if no cookie exists
// if (!$.cookie('js-expand')) {
// 	$('.accordion .expandable ul .js-expandable').first().addClass('js-active').find('ul').slideDown();
// }
$('.accordion .expandable h6').click(function() {
	var categoryText = $(this).text();
  $('.expandable li').removeClass('js-active').removeClass('js-open').find('ul').slideUp();
	$(this).parent().addClass('js-active').find('ul').slideToggle(function() {
		$.cookie('js-expand', categoryText);
		if ($(this).is(':hidden')) {
			$(this).parent().removeClass('js-active').removeClass('js-open');
			$.cookie('js-expand', null);
		}
	});
});

// $('.accordion a, .accordion h6').click(function() {
//   $('.expandable li').removeClass('js-active');
//   $(this).closest('.expandable > ul > li').addClass('js-active');
// });
;/* ==========================================================================
    Alerts -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$('.twc-alert .twc-alert-text:first').prepend('<a class="twc-icon twc-alert-close twc-show_hide" href="" style=""></a>');
$('.twc-show_hide').click(function(e) {
  $(this).parent().slideToggle();
  e.preventDefault();
});
;/* ==========================================================================
    Button Checkbox -- Version: 1.9.0.1 - Updated: 2/4/2014
   ========================================================================== */

$(function() {
  // Determine if input is already 'checked' on page load/reload
  $('label').filter(function() {
    return $(this).find('input').is(':checked');
  }).addClass('js-checked');
  $('input').click(function() {
    $('input:not(:checked)').parent('label').removeClass("js-checked");
    $('input:checked').parent('label').addClass("js-checked");
  });
});
;function equalHeight(group) {
  if ($(window).width() > mediumBreakPoint) {
    var tallest = 0;
    group.each(function() {
      var thisHeight = $(this).outerHeight();;
      if(thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    group.height(tallest);
  } else {

  }
}

$(document).ready(function() {
  equalHeight($('.equal'));
});
;// Add classes to first and last li's for every instance
$(function() {
  // Add classes to first and last of each list
  $('li:first-child').addClass('js-first');
  $('li:last-child').addClass('js-last');
});
;/* ==========================================================================
    Modal -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */

$(function(){
  $('.modal-button').click(function() {
    var modal = $(this).attr('id');
    loadPopup(modal);
    return false;
  });
  $('.modal-next').click(function() {
    var modal = $(this).attr('data-next');
    var currModal = modal - 1;
    loadPopup(modal, currModal);
    return false;
  });
  $('.modal-prev').click(function() {
    var modal = $(this).attr('data-prev');
    var currModal = modal - 1 + 2;
    loadPopup(modal, currModal);
    return false;
  });
  // event for close the popup
  $('.modal-close').click(function() {
    disablePopup();
    return false;
  });
  $(this).keyup(function(event) {
    if (event.which === 27) {
      disablePopup();
    }
  });
  $('.modal-overlay').click(function() {
    disablePopup();
    return false;
  });
});

function loadPopup(modal, currModal) {
  $('#modal' + currModal).css({
    'display': 'none'
  });
  $('#modal' + modal).css({
    'margin-top': -$('#modal' + modal).height() / 2,
    'display': 'block'
  });
  $('.modal-next').attr('data-next', modal - 1 + 2);
  $('.modal-prev').attr('data-prev', modal - 1);
  $('#modal' + modal).fadeIn(0500);
  $('.modal-overlay').fadeIn('normal');
}

function disablePopup() {
  $('.modal-container').fadeOut('normal');
  $('.modal-overlay').fadeOut('normal');
}
;// Make room for the fixed header
headerHeight = $('header[role=banner]').outerHeight();
navHeight = $('nav[role=navigation]').outerHeight();

$(function() {
  $(".open-panel").click(function(){
    if($('html').hasClass('open-nav')) {
      $('html').removeClass('open-nav');
    } else {
      $('html').addClass('open-nav');
      $('.wrap').css('margin-top', 0);
    }
    $(this).toggleClass('active');
  });
});

// $(window).on("resize", function () {
//   if ($(window).width() > mediumBreakPoint) {
//     $('.banner').css('margin-top', headerHeight);
//   } else {
//     $('.banner').css('margin-top', headerHeight);
//   }
// }).resize();

;/* ==========================================================================
    Operational Message -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
// if more than 1 marquee message, show left/right nav
if ($('.marquee-messages ul li').length > 1) {
  $('.controls').show();
}
$('.marquee-messages ul li').first().addClass('js-selected').show();
$('.marquee-messages ul li:gt(0)').addClass('js-opMessages');
$('#marquee-right').click(function() {
  if ($('.js-selected').next().index() === -1) {
    $('.marquee-messages ul li').removeClass('js-selected').hide().first().addClass('js-selected').fadeIn();
  } else {
    $('.marquee-messages ul li').hide();
    $('.js-selected').removeClass('js-selected').next().addClass('js-selected').fadeIn();
  }
});
$('#marquee-left').click(function() {
  if ($('.js-selected').prev().index() === -1) {
    $('.marquee-messages ul li').removeClass('js-selected').hide().last().addClass('js-selected').fadeIn();
  } else {
    $('.marquee-messages ul li').hide();
    $('.js-selected').removeClass('js-selected').prev().addClass('js-selected').fadeIn();
  }
});
;$('a[href*=#]:not([href=#])').click(function() {

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

$(window).scroll(_.debounce(function() {
  var offset = $(window).scrollTop();
  var current_anchor;

  for (var i = 0; i < jump_anchors.length; i++) {
    var this_anchor = $(jump_anchors).eq(i);

    if (this_anchor.offset().top - offset > $(window).height() * 1 / 4) {
      break;
    }

    current_anchor = this_anchor;
  }

  var nav_target = $('a[href*="#' + current_anchor.attr('id') + '"]');
  var nav_parent = null;

  if (!nav_target.length) {
    nav_target = $('aside .accordion .js-expandable h6:contains("' + current_anchor.attr('id') + '")').closest('a');
  }

  console.log("wtf", nav_target);

  if (nav_target.parent().parent().parent().hasClass('js-expandable')) {
    nav_parent = nav_target.parent().parent().parent();
    console.log("super parent");
  } else {
    nav_parent = null;
    console.log("just me");
  }
  nav_target = nav_target.parent();

  if (!nav_target.hasClass('js-active')) {
    console.log("changing because " + current_anchor.attr('id'));

    $('aside .accordion .js-expandable ul').slideUp();
    $('aside .accordion li').removeClass("js-active js-open");

    if (nav_parent !== null) {
      nav_parent.find('ul').slideDown();
      nav_parent.addClass("js-active");
    }

    nav_target.addClass("js-active");
  }
}, 200));
;/* ==========================================================================
    Tabs to Accordion -- Version: 1.9.0.2 - Updated: 1/7/2013
   ========================================================================== */
$(function() {
    tabCount = 1;
    $('.tab-component').each(function(index){
        $(this).addClass('onState_'+tabCount);
        tabCount++;
    });

    buildAccordion();

    $(window).bind("load", function(){
        adjustContent();
    });

    $('[class*=onState_] .tabs li').click(function() {
        var selected_tab = $(this).find('a').attr('data-ref');
        var onState =  $(this).parent().parent().parent().attr('class');
        var className = onState.split(" ");
        var finalName = className.pop();

        $('.'+finalName+' .tabs li').removeClass('js-active');
        $(this).addClass('js-active');

        if ($(window).width() > mediumBreakPoint) {
            $('.'+finalName+' .tab-content').hide();
            $('.'+finalName+' '+selected_tab).show();
        } else {
            $('.'+finalName+' .tab-content').slideUp();
            $(this).next().slideDown();
        }

        return false;
    });

    $(window).resize(function() {
       adjustContent();
    });
});

function adjustContent() {
    if ($(window).width() < mediumBreakPoint) {
        $('[class*=onState_] .tabs ul').find('li.js-active').next('div').show();
    } else {
        $('.cloned').hide();
        $('[class*=onState_]').each(function(index){
            var onState =  $(this).attr('class');
            var className = onState.split(" ");
            var finalName = className.pop();
            var toShow = $('.'+finalName+' .js-active a').attr('data-ref');
            $('.'+finalName+' .tab-content-container').find(toShow).show();
        });
    }
}

function buildAccordion(){
    $('.tab-component .tabs ul li').each(function(){
        id = $(this).find('a').attr('data-ref');
        $(id).clone().removeAttr('id').addClass('cloned').insertAfter($(this)).hide();

        if ($(window).width() < mediumBreakPoint && $(this).hasClass('js-active')) {
            $(id).clone().removeAttr('id').addClass('cloned').insertAfter($(this)).show();
        }
    });
}
;$('.hide').hide();
$('.toggle-code').click(function (ev) {
  var t = ev.target
  $('#' + $(this).attr('target')).toggle(500, function(){
    $(t).html($(this).is(':visible')? 'Hide Code' : 'Show Code')
  });
  return false;
});
