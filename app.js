var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlider: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  coverflowEffect: {
    rotate: 80,
    stretch: 0,
    depth: 100,
    slideshadows: true,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
});
