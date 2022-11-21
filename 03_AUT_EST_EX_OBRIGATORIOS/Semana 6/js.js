$(document).ready(function () {
    console.log('curriculo')
    $(".header").click(function (e) { 
        e.preventDefault();
        $('#profile').attr("src", 'Sportrecife.jpg');
    });
    $('.body').click(function (e) { 
        e.preventDefault();
        $('.body').css('background', '#c5c5c5')
        
    });
});