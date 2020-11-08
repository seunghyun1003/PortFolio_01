jQuery(function($){
  //버튼 색 제거,추가
  $('.tab_menu_btn').on('click',function(){
    $('.tab_menu_btn').removeClass('on');
    $(this).addClass('on')
  });

  //메뉴1
  $('.tab_menu_btn1').on('click',function(){
    $('.tab_box').hide();
    $('.tab_box1').show();
  });

  //메뉴2
  $('.tab_menu_btn2').on('click',function(){
    $('.tab_box').hide();
    $('.tab_box2').show();
  });

  //메뉴3
  $('.tab_menu_btn3').on('click',function(){
    $('.tab_box').hide();
    $('.tab_box3').show();
  });

  //메뉴4
  $('.tab_menu_btn4').on('click',function(){
    $('.tab_box').hide();
    $('.tab_box4').show();
  });
});
