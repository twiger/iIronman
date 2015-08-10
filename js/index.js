$(document)
    .ready(function() {

        $("#master").load("master.html", function(responseTxt, statusTxt, xhr) {
            init_master();

        });
        $(document).ajaxStop(function() {

        });

        var pos = 0;
        var scroll_bool = true;
        $(window).scroll(function() {
            var current_pos = $(this).scrollTop();
            if (current_pos > pos && scroll_bool) {
                //Scroll Down
                $('html, body').animate({
                    scrollTop: $("#main_content").offset().top - 50
                }, 1000);
                scroll_bool = false;
            }
        });



    });

function init_master() {
    //$('#master_menu').css("cssText", "width:" + $("#logo_master").width() + "px !important;");
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        rewindSpeed: 0,
        pagination: false

    });
}
