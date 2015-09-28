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
