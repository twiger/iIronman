$(document)
    .ready(function() {
        init_master();
        $.ajaxSetup({ cache: false });

        $("#main_content").load("home.html", function(responseTxt, statusTxt, xhr) {
            init_master();

        });
        $(document).ajaxStop(function() {

        });

        $('.about.item').click(function() {
            $("#main_content").load("competition_news.html", function(responseTxt, statusTxt, xhr) {
                $("#master_menu > .item").removeClass("active");
                $('.about.item').addClass("active");
                $('#info_content').css("display","none");
                $('#info_content').fadeIn(1000);
            });
        });

        $('.home.item').click(function() {
            $("#main_content").load("home.html", function(responseTxt, statusTxt, xhr) {
                init_master();

            });
        });

        $('.enrollment.item').click(function() {
            $("#main_content").load("enrollment.html", function(responseTxt, statusTxt, xhr) {
                $("#master_menu > .item").removeClass("active");
                $('.enrollment.item').addClass("active");
                $('#info_content').css("display","none");
                $('#info_content').fadeIn(1000);
            });
        });



        /*
        var pos = 0;
        var scroll_bool = true;
        $(window).scroll(function() {
            var current_pos = $(this).scrollTop();
            if (current_pos > pos && scroll_bool) {
                //Scroll Down
                disable_scroll();
                $('html, body').animate({
                    scrollTop: $("#main_content").offset().top - 50
                }, 1000, function() {
                    enable_scroll();
                });
                scroll_bool = false;
            }
        });
        */



    });

function init_master() {
    //$('#master_menu').css("cssText", "width:" + $("#logo_master").width() + "px !important;");
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        itemsCustom: [
            [0, 4],
            [400, 4],
            [700, 4],
            [1000, 4],
            [1200, 4],
            [1600, 4]
        ],
        //itemsDesktop: [1199, 3],
        //itemsDesktopSmall: [979, 3],
        rewindSpeed: 0,
        pagination: false

    });
}



function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}
