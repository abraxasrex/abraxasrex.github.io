
$(document).ready(function() {
///fade in //
$("body").fadeIn(1800);

  ///draw gradient ///
var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');

  var gradient=ctx.createLinearGradient(0,0,canvas.width,0)
  gradient.addColorStop("0","#ff8c66");
  gradient.addColorStop(".45","#ffb366");
  gradient.addColorStop(".55"," #ffd966");
  ctx.fillStyle=gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
// angular time //

(function(){
  var app=angular.module('Hungr',[]);
  app.controller('mainController', function($scope, $http){
    // to smudge//
    var CLIENT_ID= "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT";
var CLIENT_SECRET= "LWTHBH1MD1C52W0SFCARHN2VMEPG5BHKFHGPKPAWFBOY2OFE"
var F2F_KEY= "f206a12418638ea2613ab7aae579b673"
    // //
    var foodPending;
    var placePending;
    $scope.phototest="studebaker";
    $scope.inHits= [];
    $scope.ingredients= ["carrots","apples","wine", "1 cup heavy cream", "1 onion, diced"];
    $scope.noIns=false;
    $scope.noOuts=false;
    // catch undefineds //
   if($scope.radius === undefined){
    $scope.radius = 10;
     }
  //test JSON //
//  var inResults= [{name: 'spaghetti and meatballs', image:'something.jpg', time: '13 minutes', ingredients: ['spaghetti','meatballs'], link:'url'}, {name: 'spaghetti and twoballs', image:'something.jpg', time: '13 minutes', ingredients: ['spaghetti','meatballs'], link:'url'}];
//  var outResults= [{place: 'mario spaghetti', name:"spaghett alfredo", location: 'somewhere', price: '$10', link:'urll'}, {place: 'luigi spaghetti', name:"spaghett alfredo", location: 'somewhere', price: '$10', link:'someurl'}];

   // scope functions //
    $scope.foodChange = function(){
     if(foodPending && $scope.searchFood.length){
       clearTimeout(foodPending);
     }
       foodPending = setTimeout(inFetch, 800);
    if($scope.searchPlace.length){
      clearTimeout(placePending);
    }
     placePending= setTimeout(outFetch, 800);
   };
   $scope.placeChange = function(){
     if(placePending && ($scope.searchPlace.length && $scope.searchFood.length)){
         clearTimeout(placePending);
       }
         placePending = setTimeout(outFetch, 800);
   };
  $scope.match= function(these){
    for(var k=0; k< $scope.ingredients.length; k++){
        var toTest= new RegExp($scope.ingredients[k], 'i');
        if(these.match(toTest)){
          return true;
        }
    }
  }
$scope.highlight = function(haystack, needle) {
    if(!needle) {
        return $scope.trustAsHtml(haystack);
    }
    return $scope.trustAsHtml(haystack.replace(new RegExp(needle, "gi"), function(match) {
        return '<span class="highlightedText">' + match + '</span>';
    }));
};
  $scope.remove = function(item) {
  var index = $scope.ingredients.indexOf(item);
  $scope.ingredients.splice(index, 1);
}
$scope.add= function(){
      $scope.ingredients.push($scope.addKitchen);
      $scope.addKitchen= "";
}
$scope.slideIt= function(){
   $(".about_inner").toggle();
   $(".console").toggle();
}
    // foursquare client_id= "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT";
    // foursquare client_secret= "LWTHBH1MD1C52W0SFCARHN2VMEPG5BHKFHGPKPAWFBOY2OFE";
    //   4square api_version= "20130815";
    // food2fork key=  f206a12418638ea2613ab7aae579b673

   ///htpp functions //
  var getIndividual= function(i){
    //  get recipe ingredients //
    $scope.inHits=[];
    $http.get('http://food2fork.com/api/get?key='+ F2F_KEY + "&rId=" + $scope.preInHits[i].recipe_id ).success(function(results){
       $scope.inHits.push(results);
    });
  };
   function outFetch(){
    // foursquare get //

    var currentRadius= $scope.radius * 1609.344;
  //  + "&radius=" + currentRadius
  $scope.outHits=[];
     $http.get("https://api.foursquare.com/v2/venues/explore?openNow=1&query=" + $scope.searchFood + "&near=" + $scope.searchPlace + "&radius=" + currentRadius + "&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&v=" +  "20130815").success(function(results){
       $scope.outHits = results.response.groups[0].items;
        $scope.noOuts=false;
     }, function errorCallback(response){
       $scope.noOuts=true;
       $scope.outHits=[];
     });
   };
    function inFetch(){
      // food2fork get //
       $scope.inHits= [];
       $scope.preInHits=[];
      $http.get("http://food2fork.com/api/search?key=" + F2F_KEY + "&q=" + $scope.searchFood).success(function(results){
        $scope.preInHits = results.recipes;
        $scope.noIns= false;
        }).then(function(){
         for (var i = 0; i < 3; i++) {
                   getIndividual(i);
              }
        }, function errorCallback(response){
          $scope.noIns=true;
          $scope.inHits=[];
        });
        };
  });
}());
///end of angular //
