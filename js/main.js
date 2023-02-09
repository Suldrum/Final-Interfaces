(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : false
    });

    document.querySelector("#submitButton").addEventListener("click", function() {
        document.querySelector("#email").value = "";
        this.src= changePop() ;
        booleano = !booleano;
        document.querySelector("#popup").classList.toggle("oculto");
        setTimeout(() => {
            document.querySelector("#popup").classList.toggle("oculto");
        }, 1500);
    });
    let booleano = true;
    
    function changePop()
    {
        document.querySelector("#popup").innerHTML="Thanks for suscribe!" ;
    }
})(jQuery);

