
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let pages = document.querySelectorAll(".page");


// onclick functionality on next and previous page
nextBtn.addEventListener("click", nextPage);
prevBtn.addEventListener("click", prevPage);


let currentPage = 0;

// function for next page
function nextPage(){
    if(currentPage == pages.length-1){
        return;
    }
    pages[currentPage++].classList.remove("active");
    pages[currentPage].classList.add("active");
}

// function for previous page
function prevPage(){
    if(currentPage == 0){
        return;
    }
    pages[currentPage--].classList.remove('active');
    pages[currentPage].classList.add('active');

}

// onclick functionality for each page

for(let i=0; i<pages.length; i++){
    pages[i].addEventListener('click', function(){
        if(i == currentPage){
            return;
        }
        pages[currentPage].classList.remove('active')
        pages[i].classList.add('active')
        currentPage = i 
    });
}
