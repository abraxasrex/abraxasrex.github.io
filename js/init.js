(function($){
  $(function(){
   ///collapse sidebar //
    $('.button-collapse').sideNav();


     $('.carousel').carousel();


      $("#about").click(function(){
         $('html,.container, body').animate({
        scrollTop: $("#section").offset().top-50
          }, 1000);
      });

      $("#links").click(function(){
         $('html,.container, body').animate({
        scrollTop: $("#footer").offset().top-50
          }, 1000);
      });



$("#animate").click(function(){
    if ($(".bg_bubbles").hasClass("hidden")){
      $(".bg_bubbles").removeClass("hidden");
    }
     else{
 $(".bg_bubbles").addClass("hidden");
     }
  });

        //draw bubbles  ///
  var colors = new Array(
  [204, 255, 255],
  [102, 255, 255],
  [51, 204, 255],
  [0, 153, 255],
  [0, 102, 204],
  [0, 51, 204]);

var step = 0;
var colorIndices = [0,1,2,3];
var gradientSpeed = 0.006;

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


    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,10);

  }); // end of document ready
})(jQuery); // end of jQuery name space
