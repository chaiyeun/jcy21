$(document).ready(function(){
//  $('.gnb>li').mouseover(function(){
//   $('.nav_bg').stop().slideDown(300);
//   $('.sub').stop().slideDown();
//  });
//  $('.gnb>li').mouseout(function(){
//   $('.nav_bg').stop().slideUp(600);
//   $('.sub').stop().slideUp();
// });

  // $('.mini').click(function(){
  //   $('.gnb').toggleClass('on');
  //   $('.miniD').removeClass('on');
  // })
  // $('.navi>i').click(function(){
  //   $('.miniD').toggleClass('on');
  //   $('.gnb').removeClass('on');
  // })

let num=0;
setInterval(function(){
  if(num<2){
    num++;
  }else{
    num=0
  };
  $('.room_box').stop().animate({'margin-left':-100*num+'%'},600);
  },3500);

  $('.reserv_box').animate({'top':'80%','opacity':'1'},700,'linear');

  let $rewardsOffset=$('.rewards').offset().top -400;

  $(window).scroll(function(){
   if($(this).scrollTop()>$rewardsOffset){
     $('.card_wrap').animate({'left':0},1000,'swing');
    };
  });

  let $merOffset=$('.for_me').offset().top -500;
  $(window).scroll(function(){
   if($(this).scrollTop()>$merOffset){
     $('.for_me').find('.list_t').animate({'top':0},700,'linear');
    };
  });
  let $suOffset=$('.summer').offset().top -500;
  $(window).scroll(function(){
   if($(this).scrollTop()>$suOffset){
    $('.summer').find('.list_t').animate({'top':0},700,'linear');
    };
  });
  let $supOffset=$('.suprise').offset().top -500;
  $(window).scroll(function(){
   if($(this).scrollTop()>$supOffset){
    $('.suprise').find('.list_t').animate({'top':0},700,'linear')
    };
  });
  let $dearOffset=$('.dear').offset().top -500;
  $(window).scroll(function(){
   if($(this).scrollTop()>$dearOffset){
     $('.dear').find('.list_t').animate({'top':0},700,'linear');
    };
  });


  $('.room_list>li:nth-child(1)').click(function(){
    $('.se').css('display','flex');
    $(this).addClass('active');
    $('.je,.mo,.st').css('display','none')
    $('.room_list>li:nth-child(2),.room_list>li:nth-child(3),.room_list>li:nth-child(4)').removeClass('active');
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

  $(window).resize(function(){
    let win=$(this),
    winWid=win.width();

    if(winWid<=768){
      $('.fool').attr('src','img/s_banner'+1+'.png');
      $('.sfull').attr('src','img/s_banner'+2+'.png');
      $('.jout').attr('src','img/s_banner'+3+'.png');
      $('.mini').click(function(){
        $('.gnb').toggleClass('on');
        $('.miniD').removeClass('on');
      });
      $('.navi>i').click(function(){
        $('.miniD').toggleClass('on');
        $('.gnb').removeClass('on');
      });
      $('.close').click(function(){
        $('.gnb').removeClass('on')
      });
      $('.gnb>li').mouseover(function(){
        $(this).children('.sub').stop().slideDown(500);
       });
       $('.gnb>li').mouseout(function(){
        $(this).children('.sub').stop().slideUp();
      });
    }else{
      $('.fool').attr('src','img/adultfool.jpg');
      $('.sfull').attr('src','img/seoul_hotel_full.jpg');
      $('.jout').attr('src','img/maxresdefault.jpg');
      $('.gnb>li').mouseover(function(){
        $('.nav_bg').stop().slideDown(400);
        $('.sub').stop().slideDown();
       });
       $('.gnb>li').mouseout(function(){
        $('.nav_bg').stop().slideUp(600);
        $('.sub').stop().slideUp();
      });
    }

  }).resize()


})