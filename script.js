$(document).ready(function () {
    $('.image-modal').hide();
})

$('.project .box img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.image-modal img').attr('src', imgSrc);
    $('.image-modal').fadeIn();
});

$('.image-modal').click(function () {
    $(this).fadeOut();
});

$(document).keydown(function (e) {
    if (e.key === "Escape") {
        $('.image-modal').fadeOut();
    }
});