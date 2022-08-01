const projects = document.querySelector("#projects");

/* swiper ---------------------------- */
let swiper = new Swiper("#mySwiper", {
  direction: "horizontal",
  spaceBetween: 10,
  
  breakpoints : {
    0 : {
      slidesPerView: 1,
      spaceBetween: 0
    },
    
    540 : {
      slidesPerView: 2,
      spaceBetween: 10
    },

    1180 : {
      slidesPerView: 4,
    },
  },
  grabCursor: true,
  loop: true,
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    type : "bullets"
  },

  navigation: {
    nextEl: projects.querySelector(".next"),
    prevEl: projects.querySelector(".prev"),
  },

  mousewheel: true,
});