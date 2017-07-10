// header.js *** JS for the header section of the page.

$(document).ready(function() {
    
    // Fixed header scroll animation
    $(window).scroll(function() {
        
        //Change header to fixed from relative when scrolling.  Return back to relative once back at the top.
        if ($(this).scrollTop() > 1) {
            $('.navbar-inverse').addClass("fixed-header");
        } else {
            $('.navbar-inverse').removeClass("fixed-header");
        }

    });
   
});
