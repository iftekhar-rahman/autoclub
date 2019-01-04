jQuery(document).ready(function($){

   

    // homepage-slides
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});


    
    $(".featured-carousel-wrap").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        autoplay: false,
        margin: 15,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });




    // $(".scroll-top").on("click", function(){
    //     $("html, body").animate({
    //         scrollTop: 0
    //     },1000);
    // });




	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
 //        gallery: {
 //            enabled: true
 //        }
	// });


    $(".search-type-svg").on("click", function(){
        $(".search-type-svg").removeClass("active");
        $(this).addClass("active");
    });


     $('select').niceSelect();

    $('.range-slider').jRange({
        from: 0,
        to: 100,
        step: 1,
        // scale: [0,25,50,75,100],
        format: '%s',
        width: 300,
        showLabels: true,
        isRange : true
    });


    

    

});