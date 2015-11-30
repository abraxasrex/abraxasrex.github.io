
$(document).ready(function() {
///fade in //
$("canvas, .hungr, .header, .credits, .console").fadeIn(1500);

  ///draw gradient ///
var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');

  var gradient=ctx.createLinearGradient(0,0,canvas.width,0)
  gradient.addColorStop("0","#ff8c66");
  gradient.addColorStop(".45","#ffb366");
    gradient.addColorStop(".55"," #ffd966");
  ctx.fillStyle=gradient;
   ctx.fillRect(0, 0, canvas.width, canvas.height);
//
});
// angular time //

(function(){
  var app=angular.module('Hungr',[]);
  app.controller('mainController', function($scope, $http){
    $scope.inHits= inResults;
    //$scope.outHits;
    var pending;

    if($scope.search === undefined){
     $scope.search = "Seattle";
     fetch();
   }

    $scope.change = function(){
     if(pending){
       clearTimeout(pending);
     }
     pending = setTimeout(fetch, 800);
   };

  // var location="Seattle,WA";
  // $scope.client_id= "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT";
  // $scope.client_secret= "LWTHBH1MD1C52W0SFCARHN2VMEPG5BHKFHGPKPAWFBOY2OFE";
//   $scope.api_version= "20130815";

    //var url= "https://api.foursquare.com/v2/venues/search?near=" + $scope.search + "&client_id=" + id + "&client_secret=" + secret + "&v=" + version;

   function fetch(){
     $http.get("https://api.locu.com/v2/venue/search/?api_key=5f7619022eca4c85c4aea71dd5002423eb29f679&locality=seattle" ).success(function(results){
        $scope.outHits = results;
      });
     };

//   $scope.update = function(item){
  //   $scope.search = item.Title;
  //   $scope.change();
//   };

$scope.select = function(){
this.setSelectionRange(0, this.value.length);
}

  });
  var inResults= [{name: 'spaghetti and meatballs', image:'something.jpg', time: '13 minutes', ingredients: ['spaghetti','meatballs'], link:'url'}, {name: 'spaghetti and twoballs', image:'something.jpg', time: '13 minutes', ingredients: ['spaghetti','meatballs'], link:'url'}];
  var outResults= [{place: 'mario spaghetti', name:"spaghett alfredo", location: 'somewhere', price: '$10', link:'urll'}, {place: 'luigi spaghetti', name:"spaghett alfredo", location: 'somewhere', price: '$10', link:'someurl'}];
}())

///end of angular //



  //make call to food2fork//

  //make call to foursquare //
//$.getJSON('https://api.foursquare.com/v2/venues/search', function() {
//params: {
// "client_id": "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT",
// "client_secret": "LWTHBH1MD1C52W0SFCARHN2VMEPG5BHKFHGPKPAWFBOY2OFE",
// "v": "20130815",
 //"near": loc,
 //"query": "bar"
//}
//}, function( error, response ) {
//if ( error ) {
// console.log( error );
//} else {

//_.each(response.data.response.venues, function(place) {

//var hitName = place.name;
//var hitLoc= place.location;
// var  hitItem = place.menu.menues[x].items[y].name;
// var  hitPrice = place.menu.menues[x].items[y].price;
