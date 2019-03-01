
$('.banner-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 767,
          settings: {
              arrows:false,
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 575,
          settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});



    // $('.main-item__product-slide').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     adaptiveHeight: true,
    //     slidesPerRow:4,
    //     responsive: [
    // {
    //     breakpoint: 1024,
    //     settings: {
    //         slidesToShow:2,
    //         slidesToScroll:1,
    //         infinite: true,
    //         dots: false
    //     }
    // },
    // {
    //     breakpoint: 600,
    //     settings: {
    //       dots:false,
    //         slidesPerRow: 2,
    //         rows:2
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //       dots:false,
    //       arrows:false,
    //       rows:2,
    //         slidesPerRow:2
            
    //     }
    // }
    // // You can unslick at a given breakpoint now by adding:
    // // settings: "unslick"
    // // instead of a settings object
    //     ]
    // });

$('.congtrinh__slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    rows: 2,
  slidesPerRow: 4,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 575,
          settings: {
             rows: 2,
  slidesPerRow: 2
          }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]


});

$('.khoiDanhGia').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
});

$('.list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
  rows: 1,
  slidesPerRow: 4,
    // slidesToShow:4,
  responsive: [
  {
          breakpoint: 1023,
          settings: {
          arrows:false,
          rows:1,
          slidesPerRow:3
          }
      },
      {
          breakpoint: 767,
          settings: {
          arrows:false,
          rows:2,
          slidesPerRow:2
          }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]


});