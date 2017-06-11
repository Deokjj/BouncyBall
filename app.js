$(document).ready(function(){
  var newSpeed = 5;
  var count = 0;
  var level = 1;

  $(".result").hide();
  $(".gameContent").hide();
  $(".playAgain").hide();
  $(".intro").fadeOut(1500);
  $(".gameContent").fadeIn(2000);

  $('.ball').mousedown(function(){
    $('.room').off('mousedown');
    count++;
    level++;
    newSpeed = newSpeed / 1.5;
    $('.result').fadeIn(500);
    setTimeout(function(){
      $('.result').hide();
      $('.gameContent').hide();
      $('.intro').show();
      $(".intro").fadeOut(1500);
      $(".gameContent").fadeIn(2000);

      $(".ball").css("animation-duration", newSpeed + "s");
      $(".intro h1").html("Level " + level );
      $(".intro h3").html("Speed = " + (1/(2*newSpeed)) +"Hz");
      $(".intro h6").html("You grabbed deez balls " + count +" times");

      $('.room').on('mousedown',missedFuction);
      $(".intro").fadeOut(1500);
      $(".gameContent").fadeIn(2000);

    } ,2500);

  });

  var missedFuction= function(){
  $('.room').css('background-color','lightblue');
  $(".result").css("color","red");
  $(".result h1").html("You Lost..");
  $(".result").fadeIn(500);
  $(".playAgain span").html("You grabbed "+ count +" balls<br>You failed at speed: "+(1/(2*newSpeed)) +"Hz");
  $(".playAgain").fadeIn(3000);
  $(".ball").fadeOut(1500);
  setTimeout(function(){
    $(".newGameBtn").on("click",btnFuction);
  },3001);
  };

  $('.room').mousedown(missedFuction);

  var btnFuction = function(){
    newSpeed = 5;
    count = 0;
    level = 1;
    $(".ball").css("animation-duration", newSpeed + "s");
    $(".intro h1").html("Level " + level );
    $(".intro h3").html("Speed = " + (1/(2*newSpeed)) +"Hz");
    $(".intro h6").html("You grabbed deez ball 0 times");
    $(".playAgain span").html("You grabbed 0 balls");
    $(".result").css("color","blue");
    $(".result h1").html("You Won!");

    $(".result").hide();
    $('.room').css('background-color','white');
    $(".gameContent").hide();
    $(".playAgain").hide();
    $(".intro").show();
    $(".intro").fadeOut(1500);
    $(".gameContent").fadeIn(2000);
    $(".ball").fadeIn(2000);
  };

});
