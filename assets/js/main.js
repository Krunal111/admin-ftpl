// Header Fixed JS
jQuery(document).ready(function()
{
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 100) {
            jQuery(".header").addClass("fixed-header");
        } else {
            jQuery(".header").removeClass("fixed-header");
        }
    });
});
// Header Fixed JS

// Hero JS Start
var heroSlider = new Swiper(".hero__banner__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        autoHeight: true
      },
      1024: {
        slidesPerView: 1
      }
    }
});
// Hero JS End
autoHeight: true
// Popular Products JS Start
var popularProductsSlider = new Swiper(".popular__products__slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 8
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 24
        }
    }
});
// Popular Products JS End

// Diamond Products JS Start
var diamondProductsSlider = new Swiper(".diamond__products__slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 24
      }
    }
});
// Diamond Products JS End

// Rings Slider JS Start
var ringsSlider = new Swiper(".rings__slider", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
});
// Rings Slider JS End

var productThumb = new Swiper(".product__thumb__image", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var productLarge = new Swiper(".product__large__image", {
  thumbs: {
    swiper: productThumb,
  },
});

// SVG file to SVG code convert JS Start
function img2svg() {
  jQuery('.in__svg').each(function (i, e) {
    var $img = jQuery(e);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
}
img2svg();
// SVG file to SVG code convert JS End

// Filter By JS
jQuery(document).ready(function()
{
    $('.category__filter__header').click(function () {
        if ($(window).width() < 767) {
            $('.product__category__list').toggleClass("show");
        }
    });
});
// Filter By JS