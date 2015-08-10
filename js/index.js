$(document)
    .ready(function() {

        $("#master").load("master.html", function(responseTxt, statusTxt, xhr) {
            init_master();

        });
        $(document).ajaxStop(function() {

        });




    });

function init_master() {
    $('#master_menu').css("cssText", "width:" + $("#logo_master").width() + "px !important;");
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        rewindSpeed: 0,
        pagination:false

    });
}
