var animate = true;
var minFontSize = 15;
var maxFontSize = 28;
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
rivercontainer.style.width='100%';
riverContainer.style.height='100%';
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jsAnimate(){
  var children = riverContainer.children;
  if(children.length){
    for(var i = 0; i < children.length; i ++){
      children[i].style.top = parseInt(children[i].style.top.slice(0, -2)) + 1.5 + 'px';
      if(parseInt(children[i].style.top.slice(0, -2)) > 3000 || children.length > 25){
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
  var img = document.createElement('img');
  var randomSize = getRandom(35, 175);
  var randomX = getRandom(0, 1200);
 img.src="http://img15.deviantart.net/ddeb/i/2013/329/3/e/cookie__png_by_darksideofgraphic-d6vlc5l.png"
  img.style.left = randomX + 'px';
  img.style.position = 'absolute';
  img.style.margin = '0';
  img.style.padding = '0';
  img.style.top = '100px';
  img.style.zIndex = -1;
  img.style.maxWidth = randomSize + 'px';
  img.style.maxHeight = randomSize + 'px';
  img.classList.add('code-piece');
  riverContainer.appendChild(img);

  if (animate === true){
    setTimeout(loopAnim, 1500);
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
