
let btn = document.querySelector(".switch");
let bulbTop = document.querySelector(".bulb-top");
let bulbBottom = document.querySelector(".bulb-bottom");

let isOpen = false 

// function to on/ of the button 
function btnOnOf(){

  if(isOpen){
    btn.classList.remove("on");
    bulbTop.classList.remove("bulbOn");
    bulbBottom.classList.remove("bulbOn");

  }else{
    btn.classList.add("on");
    bulbTop.classList.add("bulbOn");
    bulbBottom.classList.add("bulbOn");
  }

  isOpen = !isOpen
}

btn.addEventListener("click", btnOnOf)
