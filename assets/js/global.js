var cp = cp || {};

cp.header = {

    banner: function() {

        var segmenter = new Segmenter(document.querySelector('.segmenter'), {
			onReady: function() {
				$(window).scroll(function() {  
					if (document.body.scrollTop > 10){
						segmenter.animate();
					}
				 });
			}
		});
    }
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
    cp.header.banner();
    cp.animations.fade();
});


