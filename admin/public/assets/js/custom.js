jQuery(window).scroll(function(){
      if ($(this).scrollTop() > 40) {
          $('.menu-bottom').addClass('fixed');
      } else {
          $('.menu-bottom').removeClass('fixed');
      }
});

// jQuery('.banner .owl-carousel').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:false,
//     dots:false,
//     items:1,
//     autoplay:true,
//     autoplayTimeout:3000,
// })

jQuery('.course .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{items:1},
        767:{items:2},
        979:{items:4}
    }
})

jQuery('.news .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{items:2},
        767:{items:3},
        979:{items:5}
    }
})

jQuery('.client .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{items:1},
        767:{items:2},
        979:{items:3}
    }
})

