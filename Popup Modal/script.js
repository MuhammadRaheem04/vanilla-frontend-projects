let body = document.querySelector('body');
let modalBtn = document.querySelector('.modalBtn');
let clickMe = document.querySelector('.clickMe');

clickMe.addEventListener('click', function(){
    body.classList.add('active');
})

modalBtn.addEventListener('click', function(){
    body.classList.remove('active');
})