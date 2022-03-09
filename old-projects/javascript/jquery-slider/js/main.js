if(jQuery(window).width() > 768){
    // For desktop
    jQuery(document).on('hover mouseenter','swiper-slide a',function(){
        let slideId = jQuery(this).parent().parent().data('slide');
        jQuery('.swiper-pagination span:nth-child('+slideId+')').trigger('click');
        if (slideId == 1) {
            jQuery('.swiper-button-prev').addClass('swiper-swiper-button-disabled');
        }else{
            jQuery('.swiper-button-prev','.swiper-button-next').removeClass('swiper-button-disabled');
        }
    });
}   
jQuery(document).ready(function(){
    let swiper = new Swiper('swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        initialSlide: 0,
        speed: 1000,
        loop: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        coverflow: {
            rotate: 30,
            stretch: 0,
            depth: 750,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextE1: '.swiper-button-next',
            prevE1: '.swiper-button-prev',
        }
    });

    jQuery('.swiper-container').on('click','.swiper-button-prev',function(){
        let slideId = jQuery('.swiper-slice-active').data('slide');
        swiper.slidePrev();
        if (slideId == 2) {
            jQuery('.swiper-button-prev').addClass('swiper-swiper-button-disabled');
        } else {
            jQuery('.swiper-button-prev','.swiper-button-next').removeClass('swiper-button-disabled');
        }
    });
    .on('click', 'swiper-button-next',function(){
        let slideId = jQuery('.swiper-slice-active').data('slide');
        if (slideId == 3) {
            jQuery('.swiper-button-prev').addClass('swiper-swiper-button-disabled');
        } else {
            jQuery('.swiper-button-prev','.swiper-button-next').removeClass('swiper-button-disabled');
        }
        swiper.slideNext();
    })
});