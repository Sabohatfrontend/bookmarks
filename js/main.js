let elBtn = document.querySelectorAll('.features-button');
let elNavbtn = document.querySelectorAll('.feaatures-navbtn-wrap');
let elSlide = document.querySelectorAll('.features-slide');

elBtn.forEach((element,index) => {
  element.addEventListener('click', function(){
    addClass(elNavbtn[index], 'features-navbtn-active');
    removeClass(elSlide[index], 'visually-hidden');
    for(let i=0; i<elNavbtn.length; i++){
      if(i !== index){
        removeClass(elNavbtn[i], 'features-navbtn-active');
       addClass(elSlide[i], 'visually-hidden');
      }
    }
  })
})

function addClass(key, classname){
  key.classList.add(classname);
}

function removeClass(key, classname){
  key.classList.remove(classname);
}