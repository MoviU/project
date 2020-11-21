$(document).ready(function() {
    $('select').material_select();
  });

$('select').material_select('destroy');

$(document).ready(function(){
  $('.slider').slider();
});
 
// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');