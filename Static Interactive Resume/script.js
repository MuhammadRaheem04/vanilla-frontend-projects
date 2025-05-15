// Get references to the buttons and content elements
var myEducationTab = document.getElementById('EducationTab');
var mySkillsTab = document.getElementById('SkillsTab');
var myExperienceTab = document.getElementById('WorkExperienceTab');
var educationContent = document.getElementById('my-education');
var skillsContent = document.getElementById('my-skills');
var experienceContent = document.getElementById('my-work-experience');
// Initially show the education tab content:
educationContent.style.display = 'block';
skillsContent.style.display = 'none';
experienceContent.style.display = 'none';
// add event listeners to click on buttons:
myEducationTab.addEventListener('click', function () {
    educationContent.style.display = 'block';
    skillsContent.style.display = 'none';
    experienceContent.style.display = 'none';
});
mySkillsTab.addEventListener('click', function () {
    educationContent.style.display = 'none';
    skillsContent.style.display = 'block';
    experienceContent.style.display = 'none';
});
myExperienceTab.addEventListener('click', function () {
    educationContent.style.display = 'none';
    skillsContent.style.display = 'none';
    experienceContent.style.display = 'block';
});
