
let images = document.querySelectorAll('.image-container img');
let viewImage = document.querySelector('.view-image');
let closeBtn = document.querySelector('.view-image span');
let fullImage = document.querySelector('.view-image img');


for(let image of images){
    image.addEventListener('click', function(e){
        viewImage.style.display = 'flex';
        fullImage.src = e.target.src;
    });
}

closeBtn.addEventListener('click', function(){
    viewImage.style.display = 'none';
})