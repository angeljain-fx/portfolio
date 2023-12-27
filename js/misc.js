$("#ham").click(function () {
    $("#drop-down").fadeToggle();
});

$("#contact-me-btn").click(function () {
    $('html, body').animate({
        scrollTop: $('#contact-container').offset().top
    }, 1000);
})

$("#nav-to-projects").click(function () {
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 1000);
})