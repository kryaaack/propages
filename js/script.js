$('.header__wrapper-link, .mainpage__wrapper-btn, .whoami__wrapper-next-link').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});
	
$('.header__request, .modal__close').click(function() {
    $('.modal').toggleClass('active');
})


$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: 'mailer/smart.php',
        data: $(this).serialize()
    }).done(function() {
        $(this).find('input').val('');


        $('form').trigger('reset');
    })
    return false;

})