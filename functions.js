$(document).ready(function() {
   var current;
   current='connect';
  $("#connect").click(function(){
	  if(current!=='connect'){
       $("#fader").show();
       $(".about").slideToggle("slow");
   current='connect';
	  }
     $('html,.container').animate({
    scrollTop: $("#page1").offset().top-10
      }, 1000);
  });

  $("#about").click(function(){
	   if(current!=='about'){
  $("#fader").hide();
   $(".about").slideToggle("slow");
      current='about';
	   }
     $('html,.container').animate({
    scrollTop: $("#page1").offset().top-20
      }, 1000);
  });

  $("#portfolio").click(function(){
    $('html,.container').animate({
    scrollTop: $("#page2").offset().top-10
      }, 1000);
  });

  $("#wiggle").click(function(){

    $( ".bar" ).effect( "bounce", { times: 3 }, "slow" );

    if ($("div").hasClass("owl")){
      $("div").removeClass("owl")
      $("#wiggle").html("<span class='glyphicon glyphicon-tree-conifer'id='owlspan'></span> owls");
    }
     else{
 $(".container-fluid").addClass("owl")
    $("#wiggle").html("<span class='glyphicon glyphicon-tree-conifer'id='owlspan'></span>    normal");
     }

  });

  });
