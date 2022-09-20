/* notice swiper */
var swiper = new Swiper(".notice_sw", {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".notice_nbtn",
    prevEl: ".notice_pbtn",
  },
});

/* main_bg swiper */
var swiper = new Swiper(".main_bg_sw", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".main_bg_sw_nbtn",
    prevEl: ".main_bg_sw_pbtn",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/* pc_game swiper */
var swiper = new Swiper(".pc_game_sw", {
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".pc_game_topsw", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".pc_game_sw_nbtn",
    prevEl: ".pc_game_sw_pbtn",
  },
  thumbs: {
    swiper: swiper,
  },
});

/* mobile_game swiper */
var swiper = new Swiper(".mobile_sw", {
  slidesPerView: 6,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: ".mobile_sw_nbtn",
    prevEl: ".mobile_sw_pbtn",
  },
});

/* addvert swiper */
var swiper = new Swiper(".addvert_sw", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

$(document).ready(function(){

  /* hidden menu */
  $('.main_nav').mouseenter(function(){
    $('.hidden_nav').css("visibility","visible");
  })
  $('.main_nav').mouseleave(function(){
    $('.hidden_nav').css("visibility","hidden");
  })

  /* scroll event */
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $("header").css("background" , "rgba(249,27,27,.94)");
      $("header").css("height" , "57px");
      $(".logo h1 a").css("background-position" , "0 -27px");
    }
    else {
      $("header").css("background" , "transparent");
      $("header").css("height" , "70px");
      $(".logo h1 a").css("background-position" , "0 0");
    }
  })
});