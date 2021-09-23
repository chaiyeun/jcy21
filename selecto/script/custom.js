$(document).ready(function(){

  $('.left>li').mouseenter(function(){
    $(this).children('.sub').stop().slideDown();
  });
  $('.left>li').mouseleave(function(){
    $(this).children('.sub').stop().slideUp()
  });
  $('.right>li').mouseenter(function(){
    $(this).children('.sub').stop().slideDown();
  });
  $('.right>li').mouseleave(function(){
    $(this).children('.sub').stop().slideUp()
  });

  let sliderLeg=$('.slides>img').length,
  currenidx=0,
  timer;

  $('.slides').css('width',(sliderLeg*100)+"%");

  gotoSlider(currenidx); 
  autoPlay();

  function gotoSlider(idx){
    $('.slides').stop().animate({'margin-left':(-100*idx)+'%'},1000);
    currenidx=idx;
  }

  $('.arrow').find('a').click(function(){
    if($(this).hasClass('arrow_l')){
      if(currenidx==0){
        gotoSlider(currenidx+2)
      }else{
        gotoSlider(currenidx-1);
      }
    }else{
      if(currenidx==2){
        gotoSlider(currenidx-2)
      }else{
        gotoSlider(currenidx+1);
      }
    } 
  });

  function autoPlay(){
    timer=setInterval(function(){
      let nextIdx=(currenidx+1)%sliderLeg;
      gotoSlider(nextIdx);
    },4000)
  };
  function stop(){
    clearInterval(timer);
  }
  $('.main_banner').mouseenter(function(){
    stop()
  }).mouseleave(function(){
    autoPlay()
  })
    
})