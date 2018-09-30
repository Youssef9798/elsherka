
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
                var page = $(this).data('page');
                $("#pages .page:not('.hide')").stop().fadeOut('fast', function() {
                    $(this).addClass('hide');
                    $('#pages .page[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
                });
            });
            /*-------------------------------- categories showing --------------------------------*/
            $("#menu2 li a").on('click', function(e) {
                        e.preventDefault();
                        var page = $(this).data('page');
                        $("#pages2 .page2:not('.hide')").stop().fadeOut('fast', function() {
                            $(this).addClass('hide');
                            $('#pages2 .page2[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
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

function runTotal(){
    var total = 0.00;
    var addTop = 20.00;
    
    for (var i = 0; i <= 31; i++){
        if (document.forms[1].mark[i].checked == true){
            total += addTop;
        }
    }
    totalDec = total.toFixed(2);
    document.f1.Total.value = totalDec + ' EGP';
}

function runTotal2(){
    var total2 = 0.00;
    var addTop2 = 20.00;
    for (var i = 0; i <= 31; i++){
        if (document.forms[2].mark2[i].checked == true){
            total2 += addTop2;
        }
    }
    totalDec2 = total2.toFixed(2);
    document.f2.Total2.value = totalDec2 + ' EGP';
}
