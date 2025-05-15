var resumeForm = document.getElementById("resume-form");
var resumePreview = document.getElementById("resume-preview");
var editButton = document.getElementById("editBtn");
var profilePicture = document.getElementById("profile-picture");
var imageDataURL = "";
profilePicture.addEventListener('change', function (event) {
    var imageFile = event.target.files[0];
    if (imageFile) {
        var reader_1 = new FileReader();
        reader_1.onload = function (e) {
            imageDataURL = reader_1.result;
        };
        reader_1.readAsDataURL(imageFile);
    }
    ;
});
var isEditMode = false;
// Function to generate resume content based on form data
function generateResumeContent() {
    var nameElement = document.getElementById("my-name");
    var emailElement = document.getElementById("my-email");
    var phoneElement = document.getElementById("my-phone");
    var personalInfo = {
        name: nameElement.value,
        email: emailElement.value,
        phone: phoneElement.value,
    };
    // Education section (assuming single entry)
    var educationSection = document.getElementById("my-education-section");
    var degreeElement = educationSection.querySelector("#my-degree");
    var institutionElement = educationSection.querySelector("#my-institution");
    var startDateElement = educationSection.querySelector("#start-date");
    var endDateElement = educationSection.querySelector("#end-date");
    var education = {
        degree: degreeElement.value,
        institution: institutionElement.value,
        startDate: startDateElement.value,
        endDate: endDateElement.value,
    };
    // Work experience section (assuming single entry)
    var workExperienceSection = document.getElementById("my-esperience-section");
    var positionElement = workExperienceSection.querySelector("#my-position");
    var companyElement = workExperienceSection.querySelector("#company");
    var startDateElement1 = workExperienceSection.querySelector("#startDate");
    var endDateElement1 = workExperienceSection.querySelector("#endDate");
    var experience = {
        position: positionElement.value,
        company: companyElement.value,
        startDate: startDateElement1.value,
        endDate: endDateElement1.value,
    };
    var skillsElement = document.getElementById("my-skills");
    var skills = skillsElement.value;
    // Generate resume content
    return "\n      <h2>Resume</h2>\n  \n      <h3> <span> ".concat(personalInfo.name, " </span> <h3>\n      <img src=\"").concat(imageDataURL, "\" alt=\"Profile Picture\" style=\"max-width: 200px; max-height: 200px;\">\n      <p><strong>Email:</strong> ").concat(personalInfo.email, "</p>\n      <p><strong>Phone:</strong> ").concat(personalInfo.phone, "</p>\n  \n      <h3> <span>Education </span> </h3>\n      <p>").concat(education.degree, " from ").concat(education.institution, " (").concat(education.startDate, " to ").concat(education.endDate, ")</p>\n  \n      <h3> <span> Work Experience </span> </h3>\n      <p>").concat(experience.position, " at ").concat(experience.company, " (").concat(experience.startDate, " to ").concat(experience.endDate, ")</p>\n  \n      <h3> <span> Skills </span> </h3>\n      <p>").concat(skills, "</p>\n    ");
}
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var resumeContent = generateResumeContent();
    resumePreview.innerHTML = resumeContent;
});
editButton.addEventListener("click", function () {
    isEditMode = !isEditMode;
    if (isEditMode) {
        resumeForm.style.display = "block";
        resumePreview.style.display = "none";
        editButton.textContent = "Save Editing";
    }
    else {
        resumeForm.style.display = "none";
        resumePreview.style.display = "block";
        editButton.textContent = "Edit Resume";
        // Update the resume preview with the edited form data
        var resumeContent = generateResumeContent();
        resumePreview.innerHTML = resumeContent;
    }
});
var downloadPdfButton = document.getElementById("downloadPdfBtn");
var copyLinkButton = document.getElementById("copyLinkBtn");
// adding download pdf button functionality
downloadPdfButton.addEventListener("click", function () {
    var resumeContent = document.getElementById("resume-preview").innerHTML;
    var userNameElement = document.getElementById('user-name');
    var userName = userNameElement.value;
    var uniquePath = "resumes/".concat(userName.replace(/\s+/g, '_'), "_cv.html");
    var opt = {
        margin: 1,
        filename: "".concat(uniquePath, ".pdf"),
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeContent).set(opt).save();
});
// adding Copy Link button functionality
copyLinkButton.addEventListener("click", function () {
    // create a link using url
    var userNameElement = document.getElementById('user-name');
    var userName = userNameElement.value;
    var uniquePath = "resumes/".concat(userName.replace(/\s+/g, '_'), "_cv.html");
    var shareLink = uniquePath;
    navigator.clipboard.writeText(shareLink).then(function () {
        alert("Link copied");
    }).catch(function (err) {
        console.error("Failed to copy link", err);
    });
});
