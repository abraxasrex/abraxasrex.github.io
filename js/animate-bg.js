var animate = true;
var minFontSize = 12;
var maxFontSize = 24;
var userColor = '#587895';
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
var parentHeight = document.getElementsByClassName('carousel-section')[0].clientHeight;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jsAnimate(){
  var children = riverContainer.children;
  if(children.length){
    for(var i = 0; i < children.length; i ++){
      children[i].style.top = parseInt(children[i].style.top.slice(0, -2)) + 1.5 + 'px';
      if(parseInt(children[i].style.top.slice(0, -2)) > parentHeight || children.length > 25){
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
  var randomX = getRandom(0, document.body.clientWidth);
  var randomI = getRandom(0, codeStrings.length - 1);

  p.textContent = codeStrings[randomI];
  p.style.fontSize = randomSize + 'px';
  p.style.top = '0px';
  p.style.color = userColor;
  p.style.left = randomX + 'px';
  p.style.background = 'rgba(0,0,0,0)';
  p.style.position = 'absolute';
  p.style.margin = '0';
  p.style.padding = '0';
  p.style.opacity = 0.35;
  p.classList.add('code-piece');

  p.style.webkitTransform = 'rotate(90deg)';
  p.style.mozTransform    = 'rotate(90deg)';
  p.style.msTransform     = 'rotate(90deg)';
  p.style.oTransform      = 'rotate(90deg)';
  p.style.transform       = 'rotate(90deg)';

  riverContainer.appendChild(p);

  if (animate === true){
    setTimeout(loopAnim, 2000);
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
  animate = !animate;
  createRiver();
});

createRiver();
