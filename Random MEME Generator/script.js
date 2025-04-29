
let image = document.querySelector('.meme img');


async function randomMemeGenerator(){

    let res = await fetch('https://meme-api.com/gimme');
    // console.log(res);
    let json = await res.json();
    // console.log(json);
    let url = json.url
    image.src = url;
    
    
}

randomMemeGenerator();

let timer = setInterval(randomMemeGenerator, 2000);

image.addEventListener('mouseover', function(){
    clearInterval(timer);
});

image.addEventListener('mouseleave', function(){
    timer = setInterval(randomMemeGenerator, 2000);
});