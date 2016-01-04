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

    if ($(".container li").hasClass("hidden")){
      $(".container li").removeClass("hidden");
    //  $("#wiggle").html("<span class='glyphicon glyphicon-tree-conifer'id='owlspan'></span> owls");//
    }
     else{
 $(".container li").addClass("hidden");
  //  $("#wiggle").html("<span class='glyphicon glyphicon-tree-conifer'id='owlspan'></span>    normal");
     }

  });

  });
        //draw background//
  var colors = new Array(
  [204, 255, 255],
  [102, 255, 255],
  [51, 204, 255],
  [0, 153, 255],
  [0, 102, 204],
  [0, 51, 204]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,10);
