AOS.init({
	duration: 1200,
  disable: 'mobile'
});

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
    }
});
// Hero JS End

// Popular Products JS Start
var popularProductsSlider = new Swiper(".popular__products__slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 10,
        autoHeight: true
      },
      1024: {
        slidesPerView: 3
      }
    }
});
// Rings Slider JS End

// Search Toggle Start
$(".header--search .header__search__icon").click(function(){
	$(".header__search").slideToggle();
});
// Search Toggle End

// Mobile Menu Start
$(".mobile_menu").click(function(){
	$(".header__menu, .mobile_menu").toggleClass("open");
});
// Mobile Menu End

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