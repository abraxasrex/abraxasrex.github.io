# todo:  

1. New App

2. Portfolio Site  
  a. responsive tile image: https://css-tricks.com/responsive-images-css/
    i.e.: <img  sizes="(min-width: 40em) 80vw, 100vw">
  b. animate body movement  

------------------------------------------------------

 portfolio: 5 active portfolio pieces:
 1. Project Bluebird GearVR
 2. Billseek
 3. Grind Log Pro
 4. Virtua-Breakfast
 5. Simon Says
 6. wav reverse      

 offline projects:
 1. datamap
 2. minimal poll
 3. hungr
 4. placedrop

stretch:
1. test and generate notifications for BillSeek
2. add video to portfolio (?)  behind animation (?)  
3. C# fullstack project  


algorithms:

```js
function findHighestHourglassIn2DArray(arr){
    var maxX = arr[0].length - 3;
    var maxY = arr.length - 3;
    var sums = [];
    for(var x = 0; x <= maxX; x++){
      for( var y = 0; y <= maxY; y++){
          currentSum =  ( arr[y][x] + arr[y][x + 1] + arr[y][x + 2]
          + arr[y + 1][x + 1]
          + arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2] );
          sums.push(currentSum);
      }
    }
    return Math.max.apply(null, sums);
}

```
