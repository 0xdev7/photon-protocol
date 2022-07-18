$(document).ready(function() {
  function updateScale() {
      var wh = $(window).height();
      var ww = $(window).width();
      var bh = $("body").height()
      var newScale = 1;

      if(ww > 765 && bh > wh) {
        newScale = wh / bh;
      }

      $('body').css('transform', 'scale(' + newScale + ',' +  newScale + ')');
  }
  
  $(window).resize(updateScale);
  updateScale();
});