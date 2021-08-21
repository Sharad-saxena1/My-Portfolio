$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY  > 20)
        {
            $('.navbar').addClass("sticky"); 
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
    });
    
    /*$('.carousel').owlcarousel({
        mmargin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:1,
                nav: false
            },
            1000:{
                items:1,
                nav: false
            }
        }
    });*/
});
