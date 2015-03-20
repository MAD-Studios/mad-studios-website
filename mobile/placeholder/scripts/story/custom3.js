$(function() {
    // Removes Drag Bounce on Mobile Safari
    document.ontouchmove = function(event) {
        event.preventDefault();
    };
    $('.text-toggle').on('touchstart', function() {
        var active = $(this).parent();
        if (active.hasClass('active')) {
            active.removeClass('active');
        } else if (!active.hasClass('active')) {
            active.addClass('active');
        }
    });

    $('img').attr('draggable', 'false');

    function allowSwipesDelay(myDelay) {
        console.log('Swipe Delay Began');
        $('body').removeClass('allowSwipe').delay(myDelay).queue(function() {
            $('body').addClass('allowSwipe');
            console.log('Swipe Delay Successful');
        });
    }

    var swipeInstructions = Hammer('#swipe-instructions-container').on('swipeleft dragleft', function() {
        $(this).addClass('animate').delay(1000).queue(function() {
            $(this).remove();
        });
    });

    var castleMove = Hammer($('#scene-castle'));
    var xRayMove = Hammer($('#scene-xray'));
    var labMove = Hammer($('#scene-lab'));
    var creationMove = Hammer($('#scene-creation'));
    var gerbilMove = Hammer($('#scene-gerbil'));
    var boyMove = Hammer($('#scene-boy'));



    // CASTLE GESTURES
    castleMove.on('swipeleft dragleft', function() {
        if ($('body').hasClass('allowSwipe')) {
            $('body').removeClass('allowSwipe');

            $('#scene-castle').addClass('animate').delay(2900).queue(function() {
                $(this).hide();
                $('#scene-xray').addClass('animate');
                $('body').addClass('allowSwipe');
            });
        }
    });
    castleMove.on('swipeup', function() {
        $(this).children('.text-tab').addClass('active');
    });
    castleMove.on('swipedown', function() {
        $(this).children('.text-tab').removeClass('active');
    });
    castleMove.on('tap', function() {
        $(this).children('.text-tab').toggleClass('active');
    });



    // XRAY GESTURES
    xRayMove.on('swipeleft dragleft', function() {
        if ($('body').hasClass('allowSwipe') && !$(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 3000);

            $('#scene-xray').addClass('next').delay(3000).queue(function() {
                $('#scene-lab').addClass('animate');
            });
            $('#xray-parts').addClass('animate');
            $('#xray-parts').addClass('next');
        } else if ($('body').hasClass('allowSwipe') && $(this).hasClass('next')) {
            //allowSwipesDelay(2000);
            $('body').removeClass('allowSwipe')
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $('#scene-xray').css('-webkit-transform', 'translateX(-100%)');
            $('#scene-lab').css('-webkit-transform', 'translateX(-100%)');
        }
    });
    xRayMove.on('swipeup', function() {
        $(this).children('.text-tab').addClass('active');
    });
    xRayMove.on('swipedown', function() {
        $(this).children('.text-tab').removeClass('active');
    });
    xRayMove.on('tap', function() {
        $(this).children('.text-tab').toggleClass('active');
    });



    // LAB GESTURES
    labMove.on('swipeleft dragleft', function() {
        if ($('body').hasClass('allowSwipe') && !$(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 3600);

            $('#scene-creation').addClass('animate');
            $('#scene-lab').addClass('next').css({
                '-webkit-transition-delay': '1.5s',
                '-webkit-transform': 'translateX(-200%)'
            });
            $('#unicorn-container').addClass('animate').delay(3600).queue(function() {
                $('#scene-creation #unicorn-container').hide();

            });
        } else if ($('body').hasClass('allowSwipe') && $(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $(this).css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-200%)'
            });
            $('#scene-creation').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-100%)'
            });
        }
    });
    labMove.on('swiperight', function() {
        if ($('body').hasClass('allowSwipe') && !$(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $('#scene-lab').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(0%)'
            });
            $('#scene-xray').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(0%)'
            });
        } else if ($('body').hasClass('allowSwipe') && $(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $('#scene-lab').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(0%)'
            });
            $('#scene-xray').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(0%)'
            });
        }
    });
    labMove.on('swipeup', function() {
        $(this).children('.text-tab').addClass('active');
    });
    labMove.on('swipedown', function() {
        $(this).children('.text-tab').removeClass('active');
    });
    labMove.on('tap', function() {
        $(this).children('.text-tab').toggleClass('active');
    });



    // CREATION GESTURES
    creationMove.on('swipeleft dragleft', function() {
        if ($('body').hasClass('allowSwipe') && !$(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $('#scene-creation').css({
                '-webkit-transition-delay': '1.5s',
                '-webkit-transform': 'translateX(-200%)'
            });
            $('#scene-creation').addClass('next');
            $('#scene-gerbil').addClass('animate');
        } else if ($('body').hasClass('allowSwipe') && $(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $('#scene-creation').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-200%)'
            });
            $('#scene-gerbil').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-100%)'
            });
        }
    });
    creationMove.on('swiperight', function() {
        if ($('body').hasClass('allowSwipe') && !$(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2800);

            $('#scene-creation').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(0%)'
            });
            $('#scene-lab').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-100%)'
            });
        } else if ($('body').hasClass('allowSwipe') && $(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $(this).css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(0%)'
            });
            $('#scene-lab').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-100%)'
            });
        }
    });
    creationMove.on('swipeup', function() {
        $(this).children('.text-tab').addClass('active');
    });
    creationMove.on('swipedown', function() {
        $(this).children('.text-tab').removeClass('active');
    });
    creationMove.on('tap', function() {
        $(this).children('.text-tab').toggleClass('active');
    });



    // GERBAL GESTURES
    gerbilMove.on('swipeleft dragleft', function() {
        if ($('body').hasClass('allowSwipe') && !$(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');

            $('#scene-gerbil').addClass('next');
            $('#scene-boy').addClass('animate').delay(2500).queue(function() {
                $('#scene-boy #boy-02').css('display', 'none');
                $('#scene-boy #boy-01').css({
                    '-webkit-animation': 'headTremble 0.25s',
                    '-webkit-animation-iteration-count': '4'
                });
                $('#scene-boy .text-container #text-01').delay(500).fadeOut();
                $('#scene-boy .text-container #text-02').delay(1000).fadeIn();
            });
        }
    });
    gerbilMove.on('swiperight', function() {
        if ($('body').hasClass('allowSwipe') && !$(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $('#scene-gerbil').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(0%)'
            });
            $('#scene-creation').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-100%)'
            });
        } else if ($('body').hasClass('allowSwipe') && $(this).hasClass('next')) {
            $('body').removeClass('allowSwipe');
            var bodyTimer = setTimeout(function() {
                $('body').addClass('allowSwipe');
            }, 2000);

            $('#scene-gerbil').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(0%)'
            });
            $('#scene-creation').css({
                '-webkit-transition-delay': '0s',
                '-webkit-transform': 'translateX(-100%)'
            });
        }
    });
    gerbilMove.on('swipeup', function() {
        $(this).children('.text-tab').addClass('active');
    });
    gerbilMove.on('swipedown', function() {
        $(this).children('.text-tab').removeClass('active');
    });
    gerbilMove.on('tap', function() {
        $(this).children('.text-tab').toggleClass('active');
    });



    // BOY GESTURES
    boyMove.on('swipeleft dragleft', function() {
        alert('Back to BAU site');
    });
});