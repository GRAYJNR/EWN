// document.addEventListener("DOMContentLoaded", function () {
//     // Initialize Swiper
//     var swiper = document.getElementById('team-swiper').swiper;
//     swiper.autoplay.pauseOnMouseEnter = true;
// //    swiper.on('pauseOnMouseEnter',function () {
// //     swiper.stop();
// //    })

//     // Pause on hover
//     // $('#testimonial-slide').hover(
//     //   function () {
//     //     swiper.autoplay.stop();
//     //   },
//     //   function () {
//     //     swiper.autoplay.start();
//     //   }
//     // );
//   });

$('.swiper-slide').hover(
    function () {
      var shouldPause = $(this).data('pause-on-hover');
      if (shouldPause) {
        swiper.autoplay.stop();
      }
    },
    function () {
      var shouldPause = $(this).data('pause-on-hover');
      if (shouldPause) {
        swiper.autoplay.start();
      }
    }
  );