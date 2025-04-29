
let hamburger =  document.querySelector('.hamburger');

let isClick = false;

hamburger.addEventListener('click', function(){
    if(isClick){
        hamburger.classList.remove('active')
    }else{
        hamburger.classList.add('active')
    }
    isClick = !isClick;

})