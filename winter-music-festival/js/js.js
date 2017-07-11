jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});


$(document).ready(function() {
  $('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true
});

  $('.bxslider').bxSlider({
  minSlides: 9,
  maxSlides: 9,
  slideWidth: 1920,
  slideMargin: 0,
  ticker: true,
  speed: 20000,
  useCSS: false,
  tickerHover: true
});

});

$(document).ready(function() {
$('.image-link').magnificPopup({
  type:'image',
  callbacks: {
    elementParse: function(item) {
      // Function will fire for each target element
      // "item.el" is a target DOM element (if present)
      // "item.src" is a source that you may modify

      console.log(item); // Do whatever you want with "item" object
    }
  }
});

});





