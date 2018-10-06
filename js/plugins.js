
var homeLoading = document.getElementById("home-loading");

window.addEventListener('load', function() {
        homeLoading.style.display = "none";
});


$(document).ready(function() {
			var scrollLinks = $('.scroll');
            //smooth scrolling
			scrollLinks.click(function(e) {
					e.preventDefault();
					$('body,html').animate({ scrollTop: $(this.hash).offset().top }, 1500);
				} );
    
            $("#menu li a").on('click', function(e) {
                e.preventDefault();
                var page = $(this).attr("id");
                $("#pages .page:not('.hide')").stop().fadeOut('fast', function() {
                    $(this).addClass('hide');
                    $('#pages .page[id="'+page+'"]').fadeIn('slow').removeClass('hide');
                });
            });
            /*-------------------------------- categories showing --------------------------------*/
            $("#menu2 li a").on('click', function(e) {
                        e.preventDefault();
                         var page = $(this).attr("id");
                        $("#pages2 .page2:not('.hide')").stop().fadeOut('fast', function() {
                            $(this).addClass('hide');
                            $('#pages2 .page2[id="'+page+'"]').fadeIn('slow').removeClass('hide');
                        });
                    });
            /*-------------------------------- navbar ---------------------------------------------*/
            $(".menu-icon").click(function(){
				$(".menu-icon").toggleClass("active");
                $(".navbar").toggleClass("active2");
			});
            /*------------------------------- popup divs ------------------------------------*/
            $(function() {
            //----- OPEN
            $('[data-popup-open]').on('click', function(e) {
                var targeted_popup_class = $(this).attr('data-popup-open');
                $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

                e.preventDefault();
            });

            //----- CLOSE
            $('[data-popup-close]').on('click', function(e) {
                var targeted_popup_class = $(this).attr('data-popup-close');
                $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

                e.preventDefault();
            });
        });
        $(".arabic-btn").click(function(){
            $(".arabic").addClass("active3");
            $(".english").addClass("active3");
        });
        $(".english-btn").click(function(){
            $(".english").removeClass("active3");
            $(".arabic").removeClass("active3");
        });
        $(window).on('scroll',function() {
			if($(window).scrollTop()) {
				$(".header").addClass('active4');
			}
			else {
				$(".header").removeClass('active4');
			}
		});
});

