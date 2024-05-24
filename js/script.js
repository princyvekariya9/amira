
$(document).ready(function(){
    
    $(window).resize(function(){
        
        if($(window).width() < 992){
            $('.sub_menu').hide();
        }
        else{
            $('.sub_menu').show();
        }
        
    })

    

    $('.navbar-toggler').click(function(){
        $('.open_menu').toggleClass('fa-bars fa-xmark')
    })
    
    $('.main_menu > li > a').click(function(){
        $(this).parent('li').find('.sub_menu').slideToggle();
    })

    // slider
    $('#slider').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        dots:false,

    })
    // testimonial
    $('#testimonial').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
    })

    // company logo
    $('#logo').owlCarousel({
        items:5,
        loop:true,
        nav:false,
        dots:false,
        margin:50,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }

    })
    // register form
    $('#register').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true ,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000,

    })

    // top to bottom aero
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
            $('#back-top-wrapper').fadeIn(200);    // Fade in the arrow
        } else {
            $('#back-top-wrapper').fadeOut(200);   // Else fade out the arrow
        }
      });
      $('#back-top-wrapper').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
      });
    
       // scrolling
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

      // loader start
    $(document).ready(function(){
        setTimeout(function(){
            $('.preloader').fadeOut();
        },3000);
    })
    //loader end
    

     // fancybox

     $("a.group").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600, 
        'speedOut'		:	200, 
        'overlayShow'	:	false
    });
    

})