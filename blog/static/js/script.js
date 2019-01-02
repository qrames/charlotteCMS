$(document).ready(function() {
  $('.nav-menu').prepend('<i id="close-menu" class="fas fa-times circle-icon"></i>');
  
  $('#show-menu').on('click', function(event) {
    // event.preventDefault();
    $('.nav-menu').removeClass('close');
    $('#close-menu').on('click', function(event) {
      /* Act on the event */
      $('.nav-menu').addClass('close');
    });
  });
});
