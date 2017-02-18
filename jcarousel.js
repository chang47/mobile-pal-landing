$(document).ready(function() {
    var pals = [
        'm01.png',
        'm02.png',
        'm03.png',
        'm04.png',
        'm05.png',
        'm06.png',
        'm07.png',
        'm08.png',
        'm09.png',
        'm10.png',
        'm11.png',
        'm12.png',
        'm13.png',
        'm14.png',
        'm15.png'
    ];
    var index = 0;
    var wait = false;

    // code involving the jcarousel
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    index = 1;
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }
                $('#show-pal').attr('src', pals[index]);

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev').click(function() {
            if (!wait) {
                $('.jcarousel').jcarousel('scroll', '-=1');
                index -= 1;
                if (index < 0) {
                    index = pals.length - 1;
                } 
                $('#show-pal').attr('src', pals[index]);
                waitForAnimation();
            }
            return false;
        });

        $('.jcarousel-control-next').click(function() {
            if (!wait) {
                $('.jcarousel').jcarousel('scroll', '+=1');
                index = (index + 1) % pals.length; 
                $('#show-pal').attr('src', pals[index]);
                waitForAnimation();
            }
            return false;
        });

        function waitForAnimation() {
            wait = true;
                setTimeout(function() {
                    wait = false;
                }, 500);
        }
    });
})