$(document).ready(function() {
    $(".sidebar-header").click(function(){
        $(".sidebar, .main-content").toggleClass("collapsed");
        $(this).toggleClass("show");
    })
    $(".mobile__toggle").click(function(){
      $(".header__menu").slideToggle();
    });
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