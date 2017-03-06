var cp = cp || {};

cp.header = {


    navigation: function() {

        var $headerLinks = $('#main-navigation a');

        $headerLinks.on('click', function () {
            event.preventDefault();

            $(this).attr('href','#'+$(this).attr('href').split('#')[1]);

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });
    },

};

cp.animations = {

    fade: function() {

       $('.capabilities-list li, .about-me-image, .about-me-text, .work-item').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 150
       });
    },
};

$(function() {

    var $body = $('body');

    /*if ($body.hasClass('home'))
    {

        cp.header.navigation();
    }
    //cp.header.banner();*/
   
    cp.animations.fade();
});


