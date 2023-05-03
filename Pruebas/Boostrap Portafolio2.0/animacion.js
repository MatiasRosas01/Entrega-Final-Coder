$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(".navbar-collapse").slideToggle(400);
  });
});
$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(".navbar-collapse").slideToggle(400, function() {
      if ($(this).is(":hidden")) {
        $(this).removeAttr("style");
      }
    });
  });
});

$(document).ready(function(){
  $('a[href*="#"]').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 500, 'linear');
  });
});





