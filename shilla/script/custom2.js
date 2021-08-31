$(document).ready(function(){
  $('.gnb>li').mouseover(function(){
   $('.nav_bg').stop().slideDown(300);
   $('.sub').stop().slideDown();
  });
  $('.gnb>li').mouseout(function(){
   $('.nav_bg').stop().slideUp(600);
   $('.sub').stop().slideUp();
 });
 
   $('.reserve').animate({'top':'-144%','opacity':'1'},700,'linear');
 
   let $rewardsOffset=$('.rewards').offset().top -330;
 
   $(window).scroll(function(){
    if($(this).scrollTop()>$rewardsOffset){
      $('.text_s').animate({'left':0},1000,'linear');
      $('.text_c').animate({'right':'8%'},1000,'linear');
     };
   });
 
 
   $('.room_list>li:nth-child(1)').click(function(){
     $('.se').css('display','flex');
     $(this).addClass('active');
     $('.je,.mo,.st').css('display','none')
     $('.room_list>li:nth-child(2).room_list>li:nth-child(3),.room_list>li:nth-child(4)').removeClass('active');
   });
   $('.room_list>li:nth-child(2)').click(function(){
     $('.je').css('display','flex');
     $(this).addClass('active');
     $('.se,.mo,.st').css('display','none');
     $('.room_list>li:nth-child(1),.room_list>li:nth-child(3),.room_list>li:nth-child(4)').removeClass('active');
   });
   $('.room_list>li:nth-child(3)').click(function(){
     $('.mo').css('display','flex');
     $(this).addClass('active');
     $('.se,.je,.st').css('display','none');
     $('.room_list>li:nth-child(1),.room_list>li:nth-child(2),.room_list>li:nth-child(4)').removeClass('active');
   });
   $('.room_list>li:nth-child(4)').click(function(){
     $('.st').css('display','flex');
     $(this).addClass('active');
     $('.se,.mo,.je').css('display','none');
     $('.room_list>li:nth-child(1),.room_list>li:nth-child(3),.room_list>li:nth-child(2)').removeClass('active');
   });
 })