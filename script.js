$(document).ready(function() {
    $('#about').show();
    $('#study').hide();
    $('#hobby').hide();

    $('.nav-toggle').on('click', function() {
        $('.nav-menu').slideToggle();
    });

    $('.nav-link').on('click', function(event) {
        event.preventDefault();
        var targetSection = $(this).data('section');
        $('.content-section').hide();
        $('#' + targetSection).show();
    });
});
