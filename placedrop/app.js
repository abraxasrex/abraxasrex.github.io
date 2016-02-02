(function(){
  var moonWalkApp = angular.module('MoonWalk',[]);
  moonWalkApp.controller('MapController', function($scope, $http) {
//define global vars //
var map;
var directionsService;
 var directionsDisplay;
  var infoWindow;
  var all_waypoints=[];
//scpe editing  //
//$scope.selected_image= "http://www.naturephoto-cz.com/photos/sevcik/green-monkey--xxxkockodan_dsg3970.jpg";
  $scope.edit= false;
  $scope.new_title;
  //geography ///
$scope.destination= "Renton, WA";
$scope.origin= "Seattle, WA";
$scope.transit_type= "DRIVING";
$scope.note= "green monkeys are swinging. head for the valley and pack your picnic.";
$scope.images=["http://www.naturephoto-cz.com/photos/sevcik/green-monkey--xxxkockodan_dsg3970.jpg", "https://upload.wikimedia.org/wikipedia/commons/b/b3/Chlorocebus_Aethiops_(Green_Monkey).JPG"];





$(function() {
//geolocate: call once
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      getReverseGeocodingData(position.coords.latitude, position.coords.longitude);
    //define map:   call once
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: pos,
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway", "elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
      });
        map.setCenter(pos);
        //define infowindow     !to redefine  later
        infoWindow = new google.maps.InfoWindow({map: map});
          infoWindow.setPosition(pos);
          infoWindow.setContent('You are here. Double click anywhere on the map to add a drop, or search for places near here, to the left');

           directionsService = new google.maps.DirectionsService();

          directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
            map: map,
            panel: document.getElementById('dir-panel')
          });
           directionsDisplay.addListener('directions_changed', function() {
            computeTotalDistance(directionsDisplay.getDirections());
           });

           google.maps.event.addListener(map, 'dblclick', function(e) {
             var image = {
                   url: $scope.selected_image.toString(),
                   scaledSize: new google.maps.Size(35, 35),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(0, 0)
                 };
              var new_marker= new google.maps.Marker({
                position: e.latLng,
                map: map,
                type: 'user',
                note: $scope.note,
                title: $scope.new_title,
                icon: image
              });
              add_listeners(new_marker);

         });

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    console.log("ahhhhhh no location!");
    handleLocationError(false, infoWindow, map.getCenter());
    map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
            center: {lat: 47.610, lng: 122.333}  // Seattle
        });
        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer({
          draggable: true,
          map: map,
          panel: document.getElementById('dir-panel')
        });
        directionsDisplay.addListener('directions_changed', function() {
         computeTotalDistance(directionsDisplay.getDirections());
        });
  }
});

//end of INIT //
getData();
//reverse geocode //
function getReverseGeocodingData(latitude, longitude) {
    // This is making the Geocode request
    latlng= {lat: latitude, lng: longitude};
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': latlng }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
            console.log("no geocode");
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == google.maps.GeocoderStatus.OK) {
          console.log("geocode!");
            $scope.origin= (results[1].formatted_address);
        }
    });
}

$scope.selectImage= function(i){
  console.log($scope.images[i]);
  if ($scope.selected_image !== $scope.images[i]){
      $scope.selected_image = $scope.images[i];

  }
  else{
      $scope.selected_image= "place_icon.png";

  }
}
$scope.getImage= function(img){
  if($scope.selected_image !== img){
    return false;
  }else{
    return true;
  }
}

function getData(){
  console.log("getdata");
  $http.get('http://moonwalk.mybluemix.net/get-poi').then(function(response){

     for(var i=0; i<10; i++){
       var marker = new google.maps.Marker({
        position: new google.maps.LatLng(response.data[i].lat, response.data[i].lng),
       map: map,
      title: response.data[i].name,
      icon: 'place_icon.png',
      type: 'attraction',
      note: 'Hi!'
  });
 add_listeners(marker);
     }
   });
};



$scope.redraw= function(){
  /*console.log("recalculatin");
if(all_waypoints.length){
  new_waypoints = all_waypoints.map(function(waypoint) {return {location: waypoint.position, stopover: false};});
}else{
  new_waypoints = [];
}
*/

  directionsService.route({
    origin: $scope.destination,
    destination: $scope.origin,
    travelMode:  google.maps.TravelMode[$scope.transit_type]
    //waypoints: new_waypoints
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      console.log("ready to render");
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status + "make sure your inputs are real locations.");
    }
  });
};


    function computeTotalDistance(result) {
      var total = 0;
      var myroute = result.routes[0];

      for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
      }
      total = total / 1000;
      document.getElementById('total').innerHTML = total + ' km';
    };
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
    };


function add_listeners(marker){
  google.maps.event.addListener(marker, 'mouseover', function() {

      infoWindow.setContent(marker.note);
    infoWindow.open(map, marker);

});
  google.maps.event.addListener(marker, 'dblclick', function (e) {

    marker.setMap(null);
    /*
       if($.inArray( this, all_waypoints) !== -1){
       all_waypoints.splice(this, 1);
          //    $scope.redraw();
       }else{
        //    all_waypoints.push(this);
          //    $scope.redraw();
       }
       */
  });

  google.maps.event.addListener(marker, 'click', function(){
    if (marker.getAnimation() !== null) {
      $scope.edit= false;
      marker.setAnimation(null);

    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      $scope.edit= marker;
    }

  });
}

$scope.change_marker= function(){
  if($scope.edit !== false){
            var image = {
                  url: $scope.selected_image.toString(),
                  size: new google.maps.Size(25, 25)
                };

            var new_marker= new google.maps.Marker({
             position: $scope.edit.position,
            map: map,
           title: $scope.new_title,
           icon: image,
           type: 'user',
           note: $scope.note
          });
            $scope.edit.setMap(null);
  }
}


  });

}());
