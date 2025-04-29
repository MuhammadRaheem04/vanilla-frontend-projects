

let slides = document.querySelectorAll('.slide')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')

let currentSlide = 0;


nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

setInterval(nextImg, 2000);

function nextImg(){
     let nextSlide = (currentSlide+1)%slides.length;
     slides[currentSlide].style.display = 'none';
     slides[nextSlide].style.display = 'block';
      currentSlide = nextSlide 

}

function prevImg(){
     let prevSlide = currentSlide == 0?slides.length-1:currentSlide-1;
     slides[currentSlide].style.display = 'none';
     slides[prevSlide].style.display = 'block';
     currentSlide = prevSlide

}