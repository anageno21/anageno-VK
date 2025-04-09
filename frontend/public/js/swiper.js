document.addEventListener('DOMContentLoaded', function () {
  // Slider για το page-title-homepage-3
  new Swiper('.slider-page-title-home', {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.pagination-page-title-home',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Slider για το section-testimonials
  new Swiper('.slider-testimonial-center', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // Slider για το section-news
  new Swiper('.slider-layout-3', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.pagination-layout',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});