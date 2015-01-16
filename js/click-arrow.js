var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = 'images/01.jpg';
backgrounds[1] = 'images/02.jpg';
backgrounds[2] = 'images/03.jpg';
backgrounds[3] = 'images/04.jpg';
backgrounds[4] = 'images/05.jpg';
backgrounds[5] = 'images/06.jpg';
backgrounds[6] = 'images/07.jpg';
backgrounds[7] = 'images/08.jpg';
backgrounds[8] = 'images/09.jpg';

function changeBackground() {
    currentBackground++;
    if(currentBackground > 8) currentBackground = 0;

    $('.content').fadeOut(0,function() {
        $('.content').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $('.content').fadeIn(0);
    });

//    setTimeout(changeBackground, 5000);
}

var $this = $('.content');

$('.next-arrow').click(function() {
    currentBackground++;
    if(currentBackground > 8) currentBackground = 0;

    $this.animate({opacity: 0}, 0, function() {
    $this
        .css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        })
        .animate({opacity: 1}, 0);
     });
});

$('.prev-arrow').click(function() {
    currentBackground--;
    if(currentBackground < 0) currentBackground = 8;

    $this.animate({opacity: 0}, 0, function() {
    $this
        .css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        })
        .animate({opacity: 1}, 0);
     });
});
