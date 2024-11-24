$('.project .box img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.image-modal img').attr('src', imgSrc);
    $('.image-modal').css('display', 'flex').hide().fadeIn();
});

$('.image-modal').click(function () {
    $('.image-modal').fadeOut();
 });

$(document).keydown(function (e) {
    if (e.key === "Escape") {
        $('.image-modal').fadeOut();
    }
});