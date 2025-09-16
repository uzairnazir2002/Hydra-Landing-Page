// General slider
const generalSwiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
});

// Tech slider
const techSwiper = new Swiper(".tech-swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".tech-swiper-button-next",
    prevEl: ".tech-swiper-button-prev",
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
});

