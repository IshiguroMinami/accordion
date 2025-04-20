$(document).ready(function(){
  $('.accordion__header').click(function(){
    const $content = $(this).next('.accordion__content');
    const $icon = $(this).find('.accordion__icon');

    if($content.is(':visible')) {
      $content.slideUp();
      $icon.text('＋');
    } else {
      $('.accordion__content').slideUp();
      $('.accordion__icon').text('＋');
      $content.slideDown();
      $icon.text('×');
    }
  });
});
