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

$(function() {
  $('.twc-bc-container').css('margin-top', headerHeight);
  $('aside').css("cssText", "height: " + headerHeight + " !important;");
});
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
	$(this).parent().addClass('js-active').find('ul').slideToggle(function() {
		$.cookie('js-expand', categoryText);
		if ($(this).is(':hidden')) {
			$(this).parent().removeClass('js-active');
			$.cookie('js-expand', null);
		}
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
;$('.prettyprint').hide();
$('.toggle-code').click(function (ev) {
  var t = ev.target
  $('#' + $(this).attr('target')).toggle(500, function(){
    $(t).html($(this).is(':visible')? 'Hide Code' : 'Show Code')
  });
  return false;
});
