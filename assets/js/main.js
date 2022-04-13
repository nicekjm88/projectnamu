document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".typing-animation").pause(2000).go();

  const sectionLabel = [
    "Main",
    "주요광고상품",
    "레퍼런스",
    "솔루션",
    "광고문의",
  ];
  const swiper = new Swiper(".main-swiper", {
    direction: "vertical",
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '"><span>' +
          sectionLabel[index] +
          "</span></div>"
        );
      },
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, "-120%", -400],
      },
      next: {
        shadow: true,
        translate: [0, "120%", -400],
      },
    },
    speed: 700,
  });

  const productSwiper = new Swiper(".mainAdProduct-swiper", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });

  $(".gnb-btn").on("click", function (e) {
    $(this).parent().toggleClass("is-active");
  });

  $(".quick ul").on('mouseenter', function () {
    $(this).addClass('is-active')
  })

  $(".quick ul").on('mouseleave', function () {
    $(this).removeClass('is-active')
  })
});
