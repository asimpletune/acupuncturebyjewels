$(document).ready(function() {
  $('footer .contact .item').click(function() {
    $('footer .contact').toggle();
    $('footer #contact-info-overlay').toggle();
    $($(this).attr('data-show')).fadeToggle('200');
  });
  $('footer #contact-info-overlay .item').click(function() {
    $(this).toggle();
    $('#contact-info-overlay').toggle();
    $('.contact').fadeToggle('200');
  });
});
