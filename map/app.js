

  $(function () {
     // your code goes here

  var map= new Datamap({element: document.getElementById('map'),
  scope: 'world',
  projection: 'mercator',
  fills: {
        defaultFill:  '#f0f5f5' //the keys in this object map to the "fillKey" of [data] or [bubbles]
      },
  done: function(datamap) {

  datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography, data) {

  var url= "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/" + geography.id;

  var jqxhr = $.get( url, function() {
    console.log( "success" );
  })
    .done(function() {
      var parsed = results.data;
      for(var i=0; i < parsed.length; i++){

        if(parsed[i].year == document.getElementById("rangeinput2").value && document.getElementByID("rangeinput2") > document.getElementByID("rangeinput1")){

          var  end_temp= fahrenheit(parsed.data[i]);
          var start_temp= parsed.indexOf([document.getElementByID("rangeinput1")]).data;
          start_temp= fahrenheit(start_temp);
            var diff= end_temp- start_temp;

          geography.properties.temp= diff;
          geography.properties.year= parsed[i].year + "-" + getElementByID("rangeinput1");


          var redness= Math.round(75 *  (end_temp-start_temp));
          var blueness= Math.round((end_temp-start_temp)*25);
          var greenness= Math.round(blueness/5);
        var color= tinycolor({r:redness, g:greenness, b:blueness});
        var hexcolor= color.toHexString();

        var m = {};
        m[geography.id] = hexcolor;
          datamap.updateChoropleth(m);
          m[geography.id] = diff;
        map.labels({'customLabelText': m});


      }
    else{
      console.log(err);
      if(getElementByID("rangeinput2") < getElementByID("rangeinput1")){
        alert("Time moves forwards, not backwards.");
       }
  };
};
    })

    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "finished" );
    });

  });
  },
  projection: 'mercator',
  geographyConfig: {
     borderWidth: 1,
     borderOpacity: 1,
     borderColor: '#334c4c',
     popupTemplate: function(geo, data) {
       if(geo.properties.temp){
         return ['<div class="hoverinfo pop"><strong>',
                        geo.properties.name,
                        ' got <br>',
                        geo.properties.temp,
                        '<br> degrees fahrenheit hotter, ',
                        geo.properties.year,
                        '</strong></div>'].join('');
       }else{
         return   ['<div class="hoverinfo"><strong>',
                        geo.properties.name,
                        '</strong></div>'].join('');
       }

     },
     popupOnHover: true, //disable the popup while hovering
     highlightOnHover: true,
     highlightFillColor: '#e0ebeb',
     highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
     highlightBorderWidth: 2,
     highlightBorderOpacity: 1
  }
  });

  });

  function fahrenheit(cel){
    return ( (9 * cel) / 5) + 32;
  }
