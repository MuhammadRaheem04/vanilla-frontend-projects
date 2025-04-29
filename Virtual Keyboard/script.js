
//  getting varriables 
let textContainer = document.querySelector(".text-container");
let enterKey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let deleteKey = document.querySelector(".delete");
let capsLock = document.querySelector(".caps-lock");
let allKeys = document.querySelectorAll(".key");

let isCaps = false;

// enter key functionality
enterKey.addEventListener("click", function(){
  let content = textContainer.innerText;
  let newContent = content + "\n";
  textContainer.innerText = newContent;
});

// space key functionality
spaceKey.addEventListener("click", function(){
  let content = textContainer.innerText;
  let newContent = content+ '\u00A0';
  textContainer.innerText = newContent;
});

// delete key funcionality
deleteKey.addEventListener("click", function(){
  let content = textContainer.innerText;
  let newContent = content.slice(0, content.length - 1);
  textContainer.innerText = newContent;
});

// caps lock functionality
capsLock.addEventListener("click", function(){
  if (isCaps) {
    capsLock.classList.remove("active");
    for (let key of allKeys) {
      if (key.classList.length > 1) {
        // do nothing
      } else {
        key.innerText = key.innerText.toLowerCase();
      }
    }
  } else {
    capsLock.classList.add("active");
    for (let key of allKeys) {
      if (key.classList.length > 1) {
        // do nothing
      } else {
        key.innerText = key.innerText.toUpperCase();
      }
    }
  }

  isCaps = !isCaps;
});

// typing each key functionality
for (let key of allKeys) {
    if (key.classList.length > 1) {
      // do nothing
    } else {
        key.addEventListener('click', function(){
            textContainer.innerText += key.innerText;
        })
    }
  }


