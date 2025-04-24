
let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let number = document.getElementById('number');
let symbole = document.getElementById('symbole');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent= inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value= generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "01232456789";
let symbols = "~!@#$%^&*";

function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? numbers : "";
    allChars += symbole.checked ? symbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    };
    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    };
   return genPassword;
}; 

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title= "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML= "content_copy";
            copyIcon.title= "";
        }, 2000);
    };
});