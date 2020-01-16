$(document).ready(function(){
  $('#ggmap-button').click(function(){
    if($('.ggmap').hasClass('shown')){
      $('.ggmap').fadeOut().removeClass('shown');
      $(this).css({'transform':'rotate(0deg)', 'transition':'transform .5s'})
    }else{
      $('.ggmap').fadeIn().addClass('shown');
      $(this).css({'transform':'rotate(180deg)', 'transition':'transform .5s'})
    }

  });
  $('#insta-dance-button').click(function(){
    if($('.dance-insta').hasClass('shown')){
      $('.dance-insta').slideUp().removeClass('shown');
      $(this).css({'transform':'rotate(0deg)', 'transition':'transform .5s'})
    }else{
      $('.dance-insta').slideDown().addClass('shown');
      $(this).css({'transform':'rotate(180deg)', 'transition':'transform .5s'})
    }

  });
  $('[data-toggle="tooltip"]').tooltip();
  $('a[href^="#"]').click(function(){
    if($(this).parent().hasClass('dropdown-menu')){
      var speed = 700;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == ""? 'html' :href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    }
  });
  window.onload = function() {
    scroll_effect();
    welcome_effect();
    $(window).scroll(function(){
     scroll_effect();
     tooltip_effect();
    });

    function scroll_effect(){
     $('.effect-fade').each(function(){
       var targetElement = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();
       if (scroll > targetElement - windowHeight + 200){
           $(this).addClass('effect-scroll');
       }
     });
     var scroll = $(window).scrollTop();
     if(scroll === 0){
       $('.effect-scroll').each(function(){
         $(this).removeClass('effect-scroll');
       });
     };
   };
   function tooltip_effect(){
     var windowWidth = $(window).width();
     if(windowWidth <= 568){
       $('[data-toggle="tooltip"]').each(function(){
         var targetElement = $(this).offset().top;
         var scroll = $(window).scrollTop();
         var windowHeight = $(window).height();
         if (scroll < targetElement - windowHeight + 400 && scroll > targetElement - windowHeight + 280){
           if(!$(this).hasClass('tip-shown')){
             $(this).tooltip('show');
             $(this).addClass('tip-shown');
           }
         }else{
           $(this).tooltip('hide');
           $(this).removeClass('tip-shown')
         }
       })
     };
   }
   function welcome_effect(){

   }
  };
})
