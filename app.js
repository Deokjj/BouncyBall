$(document).ready(function(){
  var clicked = false;
  var newSpeed = 5;
  var count = 0;
  var level = 1;

  $(".result").hide();
  $(".gameContent").hide();
  $(".intro").fadeOut(1500);
  $(".gameContent").fadeIn(2000);

  $('.ball').mousedown(function(){
    clicked = true;
    count++;
    level++;
    newSpeed = newSpeed / 1.5
    $('.result').fadeIn(500);
    setTimeout(function(){
      $('.result').hide();
      $('.gameContent').hide();
      $('.intro').show();
      clicked =false;
      $(".intro").fadeOut(1500);
      $(".gameContent").fadeIn(2000);

      $(".ball").css("animation-duration", newSpeed + "s");
      $(".intro h1").html("Level " + level );
      $(".intro h3").html("Speed = " + (1/(2*newSpeed)) +"Hz");
      $(".intro h6").html("You grabbed deez balls " + count +" times");

      $(".intro").fadeOut(1500);
      $(".gameContent").fadeIn(2000);

    } ,2500);

  });

  //if(!clicked){
  $('.room').mousedown(function(){
    if(!clicked){
      $('.room').css('background-color','lightblue');
      $(".result").css("color","red");
      $(".result h1").html("You Lost..");
      $(".result").fadeIn(500);
      $(".ball").fadeOut(1500);
    }
  });
  //}
});
