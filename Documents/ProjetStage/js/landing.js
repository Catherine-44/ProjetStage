$(document).ready(function($){
// Home

    // section contact infos
    $("#contact-infos, .close-section").click(function(event) {
        var timeout = setTimeout(function() {
            $("#section-contact-infos").slideToggle( "slow");
        }, 200)
    });

    // section scroll menu
    $('.section-scroll').on('click', function() { // clic element
        var page = $(this).attr('href'); // cible
        var speed = 1200; // Duré
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });

    // Section video player

    $(".btn-player-yt").click(function(event) {
        var timeout = setTimeout(function() {
            $("#player-yt").fadeIn(300);
            $('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        }, 200)
    });

    $(".close-player, .content-player").click(function(){
        $("#player-yt").fadeOut(300);
    });

    // video player Youtube

    $('#close-player, #player-yt').on('click', function() {
        var timeout = setTimeout(function() {
        $('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }, 500)
    });

    // header active scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('#header').addClass("header-active");
        }
        else{
            $('#header').removeClass("header-active");
        }
    });

// end
});



