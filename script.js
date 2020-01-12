$(document).ready(function(){
  $('.fa-chevron-circle-down').click(function(){
    if($('.ggmap').hasClass('shown')){
      $('.ggmap').slideUp().removeClass('shown');
      $(this).css({'transform':'rotate(0deg)', 'transition':'transform .5s'})
    }else{
      $('.ggmap').slideDown().addClass('shown');
      $(this).css({'transform':'rotate(180deg)', 'transition':'transform .5s'})
    }

  });
})
