$(document).ready(function() {
    $('.nav-toggle').click(function() {
        $('.nav-menu ul').toggleClass('show');
    });

    $('.nav-link').click(function(e) {
        e.preventDefault();
        $('.nav-menu ul').removeClass('show');
        var sectionTo = $(this).attr('href');
        $('.content-section').hide();
        $(sectionTo).fadeIn(1000);
    });
});
