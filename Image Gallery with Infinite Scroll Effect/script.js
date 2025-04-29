
let images = document.querySelectorAll('.image-container img');
let viewImage = document.querySelector('.view-image');
let closeBtn = document.querySelector('.view-image span');
let fullImage = document.querySelector('.view-image img');
let imageContainer = document.querySelector('.image-container');


for(let image of images){

}

closeBtn.addEventListener('click', function(){
    viewImage.style.display = 'none';
})

async function getImage(n){
    for(let i=0; i<n; i++){
    let res = await fetch("https://picsum.photos/300/200?random=${i}");
    // console.log(res);
    let url = res.url;
    // console.log(url);
    let img = document.createElement("img");
    img.src = url;
    imageContainer.appendChild(img);

    img.addEventListener('click', function(e){
        console.log(e);
        viewImage.style.display = 'flex'
        fullImage.src = e.target.src;
    })
    }  
}

// clientHeight
// scrollHeight
// scrollTop

window.addEventListener('scroll', function(e){
//   console.log(e);
let {clientHeight, scrollHeight, scrollTop} = e.target.documentElement;
console.log(scrollHeight);
console.log(clientHeight);
console.log(scrollTop);

if(clientHeight + scrollTop + 1 >= scrollHeight){
    getImage(3);
}
})

getImage(9);