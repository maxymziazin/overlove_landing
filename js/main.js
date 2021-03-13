$(function () {
  $("#play").click(function (event) {
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

  // // Slider
  // $("#slider").slick({
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   arrows: false,
  // });
});

$(function () {
  $("#slider").on("init reInit", function (event, slick) {
    let amount = slick.slideCount;
    $("#range").attr("max", amount);
  });

  $("#slider").on("afterChange", function (e, slick, currentSlide) {
    $("#range").val(currentSlide + 1);
  });

  $("#range").on("input change", function () {
    $("#slider").slick("slickGoTo", this.value - 1);
  });

  $("#slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  });
});
