interface Education {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
  }
  
  interface Experience {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
  }
  
  interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
  }
  
  const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
  const resumePreview = document.getElementById("resume-preview") as HTMLDivElement;
  const editButton = document.getElementById("editBtn") as HTMLButtonElement;
  
  const profilePicture= document.getElementById("profile-picture") as HTMLInputElement;
  let imageDataURL: string = "";
  profilePicture.addEventListener('change', (event)=>{
    const imageFile= (event.target as HTMLInputElement).files![0];
  
    if(imageFile) {
      const reader = new FileReader();
  
      reader.onload= (e) =>{
        imageDataURL = reader.result as string;
      };
      reader.readAsDataURL(imageFile);
    };
  }); 
  
  let isEditMode = false;
  
  // Function to generate resume content based on form data
  function generateResumeContent(): string {
    const nameElement = document.getElementById("my-name") as HTMLInputElement;
    const emailElement = document.getElementById("my-email") as HTMLInputElement;
    const phoneElement = document.getElementById("my-phone") as HTMLInputElement;
  
    const personalInfo: PersonalInfo = {
      name: nameElement.value,
      email: emailElement.value,
      phone: phoneElement.value,
    };
  
    // Education section (assuming single entry)
  const educationSection = document.getElementById("my-education-section") as HTMLElement;
  const degreeElement = educationSection.querySelector("#my-degree") as HTMLInputElement;
  const institutionElement = educationSection.querySelector("#my-institution") as HTMLInputElement;
  const startDateElement = educationSection.querySelector("#start-date") as HTMLInputElement;
  const endDateElement = educationSection.querySelector("#end-date") as HTMLInputElement;
  
  const education: Education = {
  degree: degreeElement.value,
  institution: institutionElement.value,
  startDate: startDateElement.value,
  endDate: endDateElement.value,
  };
  
  // Work experience section (assuming single entry)
  const workExperienceSection = document.getElementById("my-esperience-section") as HTMLElement;
  const positionElement = workExperienceSection.querySelector("#my-position") as HTMLInputElement;
  const companyElement = workExperienceSection.querySelector("#company") as HTMLInputElement;
  const startDateElement1 = workExperienceSection.querySelector("#startDate") as HTMLInputElement;
  const endDateElement1 = workExperienceSection.querySelector("#endDate") as HTMLInputElement;
  
  const experience: Experience = {
  position: positionElement.value,
  company: companyElement.value,
  startDate: startDateElement1.value,
  endDate: endDateElement1.value,
  };
  
    const skillsElement = document.getElementById("my-skills") as HTMLInputElement;
    const skills: string = skillsElement.value;
  
    // Generate resume content
    return `
      <h2>Resume</h2>
      <h3> <span> ${personalInfo.name} </span> <h3>
      <img src="${imageDataURL}" alt="Profile Picture" style="max-width: 200px; max-height: 200px;">
      <p><strong>Email:</strong> ${personalInfo.email}</p>
      <p><strong>Phone:</strong> ${personalInfo.phone}</p>
  
      <h3> <span>Education </span> </h3>
      <p>${education.degree} from ${education.institution} (${education.startDate} to ${education.endDate})</p>
  
      <h3> <span> Work Experience </span> </h3>
      <p>${experience.position} at ${experience.company} (${experience.startDate} to ${experience.endDate})</p>
  
      <h3> <span> Skills </span> </h3>
      <p>${skills}</p>
    `;
  }
  
  resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const resumeContent = generateResumeContent();
    resumePreview.innerHTML = resumeContent;
  });
  
  editButton.addEventListener("click", () => {
    isEditMode = !isEditMode;
  
    if (isEditMode) {
      resumeForm.style.display = "block";
      resumePreview.style.display = "none";
      editButton.textContent = "Save Editing";
    } else {
      resumeForm.style.display = "none";
      resumePreview.style.display = "block";
      editButton.textContent = "Edit Resume";
  
      // Update the resume preview with the edited form data
      const resumeContent = generateResumeContent();
      resumePreview.innerHTML = resumeContent;
    }
  });

  // adding download pdf Copy Link buttons 
  declare var html2pdf: any;
const downloadPdfButton = document.getElementById("downloadPdfBtn") as HTMLButtonElement;
const copyLinkButton = document.getElementById("copyLinkBtn") as HTMLButtonElement;
// adding download pdf button functionality
downloadPdfButton.addEventListener("click", () => {
    const resumeContent = document.getElementById("resume-preview")!.innerHTML;
    const userNameElement= document.getElementById('user-name') as HTMLInputElement;
    const userName= userNameElement.value;
    const uniquePath= `resumes/${userName.replace(/\s+/g, '_')}_cv.html`
    const opt = {
        margin: 1,
        filename: `${uniquePath}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeContent).set(opt).save();
});
// adding Copy Link button functionality
copyLinkButton.addEventListener("click", () => {

  // create a link using url
  const userNameElement= document.getElementById('user-name') as HTMLInputElement;
  const userName= userNameElement.value;
  const uniquePath= `resumes/${userName.replace(/\s+/g, '_')}_cv.html`
  const shareLink = uniquePath; 
    navigator.clipboard.writeText(shareLink).then(() => {
        alert("Link copied");
    }).catch(err => {
        console.error("Failed to copy link", err);
    });
});
