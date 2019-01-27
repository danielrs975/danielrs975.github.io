function isScrolledIntoView(elem) {
    // Declare variable for top of viewport
    var TopViewPort = $(window).scrollTop();
    // Declare variable for bottom of viewport
    var BotViewPort = TopViewPort + $(window).height();
    // Declare Bot = Top + viewport
    var TopOfElement = $(elem).offset().top;
    // Get coordinates of element relative to the document.
    var BotOfElement = TopOfElement + $(elem).height();
    return ((BotOfElement <= BotViewPort) && (TopOfElement >= TopViewPort));
    // &&	and	(x < 10 && y > 1) is true 
    // Look at booleans in studies
    // >=	greater than or equal to , <= less than or equal to
    // https://www.w3schools.com/js/js_comparisons.asp
    
    // Return when element is within viewport
}
  
$(window).scroll(function () {
//   Ask if the div is in viewport
    if (isScrolledIntoView('.animation') === true) {
        $("div.animation > h1").addClass('animated-section');
        $('div.animation > div').addClass('animated-underline');
    }
    
    $('.subsections, .subsections-2, .language-container, .framework-container').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated-fadeIn-right');
        }
    });
    
    $('.subsections-left-1, .profile-photo, #little-about-myself, .caracteristic').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated-fadeIn-left');
        }
    });
    
    $('#welcome-section, #about-me-section').each(function(key, value) {
        if(isScrolledIntoView(this) === true){
            $("a").removeClass('active');
            var activeSection = "a[href='#" + $(value).attr('id') + "']";
            $(activeSection).addClass('active');
        }
    });
});