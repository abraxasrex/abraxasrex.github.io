var portfolioItems = document.getElementsByClassName('carousel-item');
var leftArrow = document.getElementsByClassName('arrow-left')[0];
var rightArrow = document.getElementsByClassName('arrow-right')[0];
console.log(portfolioItems);
var current = 0;

function updateCarousel(){
  console.log('updated carousel');
  for(var i = 0; i < portfolioItems.length; i++){
    portfolioItems[i].classList.remove('shown');
  }
  portfolioItems[current].classList.add('shown');
}

function cycleLeft(){
  current -= 1;
  if(current <= 8 && current >= 0){
    updateCarousel();
  } else {
    current = 0;
    updateCarousel();
  }
}

function cycleRight(event){
  current += 1;
  if(current <= 8 && current >= 0){
    updateCarousel();
  } else {
    current = 0;
    updateCarousel();
  }
}

leftArrow.addEventListener('click', cycleLeft);
rightArrow.addEventListener('click', cycleRight);

updateCarousel();
