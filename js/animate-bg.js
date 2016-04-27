var createRiver = function(minFontSize, maxFontSize, userColor, containerWidth, containerHeight, codeStrings){

if(typeof minFontSize !== 'number' || typeof maxFontSize !== 'number'){
minFontSize = 10;
maxFontSize = 25;
console.log('sorry, your font input was not a number. I set it for you.');
}

if(typeof containerWidth !== 'number' || typeof containerHeight !== 'number'){
 containerWidth = 700;
 containerHeight = 300;
 console.log('sorry, your container input was not a number. I set it for you.')
}

if(typeof userColor !== 'string'){
  userColor = 'black';
  console.log('sorry, color should be a string! I set it for you.')
}

if(!Array.isArray(codeStrings)){
  codeStrings = [
    '(function(){a=b})(),a=a)',
    'a=a=b',
    'for(vari=0;i<arr.length;i++)',
    'if(cat="orange"){lasagna.eat}',
    'typeof NaN==="number"',
    '5!=="5"',
    '7=="7"',
    '[{prp:0},{prp:1}]',
    '!(x!==y)||false',
    'o[p].q>=r+s',
    '01001',
    '0110010110'
  ];
  console.log('sorry, ur input was not an array. I set it for you.');
}

var riverContainer = document.getElementById('river-container');
var parentWidth = riverContainer.style.width;
function formatContainer(){
  riverContainer.style.overflow = 'hidden';
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jsAnimate(){
  var children = riverContainer.children;
  if(children.length){
    for(var i = 0; i < children.length; i ++){
      children[i].style.left = parseInt(children[i].style.left.slice(0, -2)) + 1.5 + 'px';

      if(parseInt(children[i].style.left.slice(0, -2)) > 1200 || children.length > 25){
         riverContainer.removeChild(children[i]);
     }
    }
  }
}

function loopAnim (){
  var p = document.createElement('p');
  var randomSize = getRandom(minFontSize, maxFontSize);
  var randomY = getRandom(0, containerHeight);
  var randomI = getRandom(0, codeStrings.length - 1);
  p.textContent = codeStrings[randomI];
  p.style.fontSize = randomSize + 'px';
  p.style.top = randomY + 'px';
  p.style.color = userColor;
  p.style.left = '10px';
  p.style.background = 'rgba(0,0,0,0)';
  p.style.position = 'absolute';
  p.style.margin = '0';
  p.style.padding = '0';
  p.style.opacity = Math.random();
  p.classList.add('code-piece');
  riverContainer.appendChild(p);
  if (animate ===1){
    setTimeout(loopAnim, 1500);
  } else {

  }
}

formatContainer();
loopAnim(); //1500
jsAnimate(); //25
}

createRiver('n','n', '#587895', 1500, 450, 'n');

document.getElementById('nav-animate').addEventListener('click', function(){
  if(animate =)
});
