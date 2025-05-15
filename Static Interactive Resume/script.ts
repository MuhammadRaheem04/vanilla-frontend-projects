// Get references to the buttons and content elements
const myEducationTab = document.getElementById('EducationTab') as HTMLButtonElement;
const mySkillsTab = document.getElementById('SkillsTab') as HTMLButtonElement;
const myExperienceTab = document.getElementById('WorkExperienceTab') as HTMLButtonElement; 

const educationContent = document.getElementById('my-education') as HTMLElement;
const skillsContent = document.getElementById('my-skills') as HTMLElement;
const experienceContent = document.getElementById('my-work-experience') as HTMLElement;


// Initially show the education tab content:
educationContent.style.display = 'block';
skillsContent.style.display = 'none';
experienceContent.style.display ='none';

// add event listeners to click on buttons:

myEducationTab.addEventListener('click', ()=>{
    educationContent.style.display= 'block';
    skillsContent.style.display = 'none';
    experienceContent.style.display ='none';
});

mySkillsTab.addEventListener('click', ()=>{
    educationContent.style.display= 'none';
    skillsContent.style.display = 'block';
    experienceContent.style.display ='none';
});

myExperienceTab.addEventListener('click', ()=>{
    educationContent.style.display= 'none';
    skillsContent.style.display = 'none';
    experienceContent.style.display ='block';
});