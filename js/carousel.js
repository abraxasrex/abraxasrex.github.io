var projects = projects;
var current = 0;
var leftArrow = document.getElementsByClassName('arrow-left')[0];
var rightArrow = document.getElementsByClassName('arrow-right')[0];
var itemTitle = document.getElementById('item-title');
var itemInfo = document.getElementById('item-info');
var githubLink = document.getElementById('github-link');
var liveLink = document.getElementById('live-link');
var itemTags = document.getElementById('item-tags');
var itemContainer = document.getElementById('item-container');

function updateCarousel(){
  // remove example link
  var elem = document.getElementById('example');
  if(elem){
    elem.parentNode.removeChild(elem);
  }
  //container, title, info, links, tags
  itemTitle.textContent = projects.list[current].name;
  itemInfo.textContent = projects.list[current].description;
  itemContainer.style.backgroundImage = 'url(' + projects.list[current].img + ')';
  itemTags.innerHTML = '';
  for(var i = 0; i < projects.list[current].tags.length; i++){
    var div = document.createElement('div');
    div.textContent = projects.list[current].tags[i];
    div.style.background = tag_colors[projects.list[current].tags[i]];
  //  div.style.marginTop = '25px';
    itemTags.appendChild(div);
  }
  liveLink.setAttribute('href', projects.list[current].liveLink);
  githubLink.setAttribute('href', projects.list[current].githubLink);
    if(projects.list[current].private){
      document.getElementsByClassName('github-link')[0].textContent = 'Info';
    } else if (projects.list[current].exampleLink){
      document.getElementsByClassName('append-links')[0].insertAdjacentHTML('beforeend', ' <span  id="example">| <a href="http://billseek.herokuapp.com:80/interests/togo123" target="_blank"><div class="github-link">example</div></a></span>')
    }else if(projects.list[current].offLine){
      document.getElementsByClassName('live-link')[0].textContent = 'Offline';
    //  liveLink.children.textDecoration = 'line-through';
      document.getElementsByClassName('github-link')[0].textContent = 'Github';
    } else if(projects.list[current].npmPackage){
      document.getElementsByClassName('live-link')[0].textContent = 'Npm';
      document.getElementsByClassName('github-link')[0].textContent = 'Github';
    } else {
      document.getElementsByClassName('github-link')[0].style.visibility = 'visible';
        document.getElementsByClassName('live-link')[0].textContent = 'Live';
      document.getElementsByClassName('github-link')[0].textContent = 'Github';
    }
}

function cycleLeft(){
  itemContainer.style.transform = 'translateX(100%)';
  itemContainer.style.opacity = 0;
    current -=1;
    if(!(current <= 9 && current >= 0)){
          current = 9;
    }
  setTimeout(function(){
    itemContainer.style.transform = 'translateX(-100%)';
    updateCarousel();
  }, 500);
  setTimeout(function(){
    itemContainer.style.transform = 'translateX(0%)';
    itemContainer.style.opacity = 1;
  }, 700);
}

function cycleRight(){
 itemContainer.style.transform = 'translateX(-100%)';
 itemContainer.style.opacity = 0;
  current += 1;
  if(!(current <= 9 && current >= 0)){
        current = 0;
  }
  setTimeout(function(){
    itemContainer.style.transform = 'translateX(100%)';
    updateCarousel();
  }, 500);
  setTimeout(function(){
    itemContainer.style.transform = 'translateX(0%)';
    itemContainer.style.opacity = 1;
  }, 750);

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
