var a=0;
var html ="<a href='https://github.com/rishabh3112'><i class='fa fa-github'></i></a> <a href='https://www.freecodecamp.com/rishabh3112'><i class='fa fa-fire'></i></a><br><small class=small>Lets Meet</small>"
$(".img").click(function(){
  if(a==0)
  {
    $(".banner").animate({top: "78px"}, 1000);
    $(".img").addClass("icon");
    $(".img").html(html);
    a=1;
  }
  else{
    $(".banner").animate({top: "108px"}, 1000);
    $(".img").text("");
    $(".img").removeClass("icon");
    a=0;
  }
});

var b=0;
$(".btn").click(function(){
  if(b==0)
  {
    $(".cards").animate({height: "400px"});
    $('html, body').animate({
        scrollTop: $(".btn").offset().top
    }, 2000);
    $(".cards").css("overflow","auto");
    $(".btn").html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
    $(".btn").addClass("goup");
    b=1;
  }
  else{
    $(".cards").css("height","0px");
    $(".cards").css("overflow","hidden");
    $(".btn").html('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    $(".btn").removeClass("goup");
    b=0;
  }
});
$('a').click(function(){
  var href = $(this).attr('href');
  setTimeout(function() {window.location = href}, 2000);
});
