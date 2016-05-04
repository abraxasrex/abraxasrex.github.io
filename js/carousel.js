var projects = projects;
var leftArrow = document.getElementsByClassName('arrow-left')[0];
var rightArrow = document.getElementsByClassName('arrow-right')[0];
var current = 0;
var itemTitle = document.getElementById('item-title');
var itemInfo = document.getElementById('item-info');
var githubLink = document.getElementById('github-link');
var liveLink = document.getElementById('live-link');
var itemTags = document.getElementById('item-tags');
var itemContainer = document.getElementById('item-container');

function updateCarousel(){
  //container, title, info, links, tags
  itemTitle.textContent = projects.list[current].name;
  itemInfo.textContent = projects.list[current].description;
  itemContainer.style.backgroundImage = 'url(' + projects.list[current].img + ')';
  itemTags.innerHTML = '';
  for(var i = 0; i < projects.list[current].tags.length; i++){
    var div = document.createElement('div');
    div.textContent = projects.list[current].tags[i];
    itemTags.appendChild(div);
  }
  liveLink.children[0].href = projects.list[current].liveLink;
  githubLink.children[0].href = projects.list[current].githubLink;
}

function cycleLeft(){
    current -=1;
  if(current <= 5 && current >= 0){
    updateCarousel();
  } else {
    current = 0;
    updateCarousel();
  }
}

function cycleRight(){
    current +=1;
  if(current <= 5 && current >= 0){
    updateCarousel();
  } else {
    current = 0;
    updateCarousel();
  }
}

leftArrow.addEventListener('click', cycleLeft);
rightArrow.addEventListener('click', cycleRight);

updateCarousel();

document.getElementById('nav-about').addEventListener('click', function(){
  document.body.scrollTop = document.getElementById('about').offsetTop;
})
document.getElementById('nav-links').addEventListener('click', function(){
    document.body.scrollTop = document.getElementById('about').offsetTop;
})
