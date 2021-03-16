$(function () {
  // Burger

  let $burger = $("#burger");
  let $nav = $("#nav");
  let ms = 300;

  $burger.on("click", function (event) {
    event.preventDefault();

    $nav.slideToggle(ms);
  });

  $nav.on("click", function (event) {
    if ($burger.css("display") != "none") {
      $nav.slideUp(ms);
    }
  });

  // Fixed header

  let $body = $(document.body);
  let $header = $("#header");
  let $headerTop = $("#headerTop");

  let scroll = $(window).scrollTop();
  let bodyWidth = $body.width();
  let headerHeight = $header.innerHeight();

  checkScroll(scroll, bodyWidth);

  $(window).on("scroll", function (event) {
    scroll = $(window).scrollTop();
    bodyWidth = $body.width();

    checkScroll(scroll, bodyWidth);
  });

  function checkScroll(scroll, bodyWidth) {
    if (scroll >= headerHeight && bodyWidth < 768) {
      $headerTop.addClass("fixed");
    } else {
      $headerTop.removeClass("fixed");
    }
  }

  // Play animation

  let $play = $("#play");

  $play.click(function (event) {
    let ms = 300;
    let width = $(this).width();
    let height = $(this).height();

    $(this)
      .animate(
        {
          width: `-=${width / 2}`,
          height: `-=${height / 2}`,
        },
        ms
      )
      .animate(
        {
          width: `+=${width / 2}`,
          height: `+=${height / 2}`,
        },
        ms
      );
  });

  // Slider un-graph

  let $polzunok = $("#polzunok");
  let $slider = $("#slider");

  $polzunok.slider({
    animate: 400,
    range: "min",
    value: 0,
  });

  $slider.on("init reInit", function (event, slick) {
    $polzunok.slider("option", {
      max: slick.slideCount - 1,
    });
  });

  $slider.on("afterChange", function (e, slick, currentSlide) {
    $polzunok.slider("value", currentSlide);
  });

  $polzunok.on("slide", function (event, ui) {
    $slider.slick("slickGoTo", ui.value);
  });

  $slider.slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // Carousel

  let $carousel = $("#carousel");

  $carousel.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<button type="button" class="carousel__btn slick-prev"></button>',
    nextArrow:
      '<button type="button" class="carousel__btn slick-next"></button>',
  });
});
