var animate = true;
var minFontSize = 10;
var maxFontSize = 25;
var userColor = '#587895';
var containerWidth = 1500;
var containerHeight = 700;
  var codeStrings = [
    '(function(){a=b})(),a=a)',
    'a=a=b',
    'for(vari=0;i<arr.length;i++)',
    'if(cat==="orange"){lasagna.eat}',
    'typeof NaN==="number"',
    '5!=="5"',
    '7=="7"',
    '[{key1:0},{key2:1}]',
    '!(x!==y)||false',
    'o[p].q>=r+s',
    '01001',
    '0110010110',
    '[10001,0111,01011]',
    '!!parseInt("24")%8==0'
  ];

var riverContainer = document.getElementById('river-container');
var parentWidth = riverContainer.style.width;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jsAnimate(){
  var children = riverContainer.children;
  if(children.length){
    for(var i = 0; i < children.length; i ++){
      children[i].style.left = parseInt(children[i].style.left.slice(0, -2)) + 1.5 + 'px';

      if(parseInt(children[i].style.left.slice(0, -2)) > 1200 || children.length > 30){
         riverContainer.removeChild(children[i]);
     }
    }
  }
  if (animate === true){
    setTimeout(jsAnimate, 25);
  } else {
    riverContainer.innerHTML = '';
    return;
  }
}

function loopAnim (){
  var p = document.createElement('p');
  var randomSize = getRandom(minFontSize, maxFontSize);
  var randomY = getRandom(0, containerHeight);
  var randomI = getRandom(0, codeStrings.length - 1);
  p.textContent = codeStrings[randomI];
  p.style.fontSize = randomSize + 'px';
  p.style.top = randomY + maxFontSize + 'px';
  p.style.color = userColor;
  p.style.left = '10px';
  p.style.background = 'rgba(0,0,0,0)';
  p.style.position = 'absolute';
  p.style.margin = '0';
  p.style.padding = '0';
  p.style.opacity = Math.random();
  p.classList.add('code-piece');
  riverContainer.appendChild(p);

  if (animate === true){
    setTimeout(loopAnim, 1250);
  } else {
    riverContainer.innerHTML = '';
    return;
  }
}
var createRiver = function(){
loopAnim();
jsAnimate();
};

document.getElementById('nav-animate').addEventListener('click', function(){
  if(animate === true){
    animate = false;
  } else {
    animate = true;
    createRiver();
  }
});

createRiver();
