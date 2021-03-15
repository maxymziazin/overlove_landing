$(function () {
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
  let $sliderItem = $(".slider__item");

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
  });

  //! Повесь событие на ресайз страницы и перезагружай с новым slidesToShow

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
