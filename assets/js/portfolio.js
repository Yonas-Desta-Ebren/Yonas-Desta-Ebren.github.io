// Get project ID from URL
document.addEventListener("DOMContentLoaded", () => {
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Find the project by ID
const project = projects.find(p => p.id == projectId);

if (project) {
    document.getElementById("project-title").innerText = project.title;
    document.getElementById("project-subtitle").innerText = project.subtitle;
    document.getElementById("project-description").innerText = project.description;
    document.getElementById("project-description2").innerText = project.description2;
    document.getElementById("project-description3").innerText = project.description3;
    document.getElementById("project-description4").innerText = project.description4;
    document.getElementById("project-description5").innerText = project.description5;

    document.getElementById("project-catagory").innerText = project.catagory;
    document.getElementById("project-client").innerText = project.client;
    document.getElementById("project-projectdate").innerText = project.projectdate;
    document.getElementById("project-projecturl").innerText = project.projecturl;
    document.getElementById("project-projecturl").href = project.projecturl;
    document.getElementById("project-visit").href = project.visit;

    document.getElementById("project-respondantimage").src = project.respondantimage;
    document.getElementById("project-testimonial").innerText = project.testimonial;
    document.getElementById("project-respondant").innerText = project.respondant;
    document.getElementById("project-role").innerText = project.role;

    document.getElementById("project-image1").src = project.projectimage1;
    document.getElementById("project-image2").src = project.projectimage2;
    document.getElementById("project-image3").src = project.projectimage3;
    // Add technologies
    // const techList = document.getElementById("project-technologies");
    document.getElementById("technology-1").innerText = project.technology1;
    document.getElementById("technology-2").innerText = project.technology2;
    document.getElementById("technology-3").innerText = project.technology3;
    document.getElementById("technology-4").innerText = project.technology4;
    // project.technologies.forEach(tech => {
    //     const li = document.createElement("li");
    //     li.innerText = tech;
    //     techList.appendChild(li);
    // });
    // console.log(project);
} else {
    document.body.innerHTML = "<h1>Protfolio not found</h1>";
}
});