let headerButton = document.getElementById('headerButton')
let headerElement = document.querySelector('header')
let projectsButton = document.getElementById('projects');
let bodyElement = document.querySelector('body');

const projects = [
    {
        "title": "Built to Last.",
        "link": "./projects/builttolast.html"
    },
    {
        "title": "Europa spoort niet",
        "link": "./projects/europaspoortniet.html"
    },
    {
        "title": "Coding Duolingo",
        "link": "./projects/fedproject.html"
    },
    {
        "title": "Climate Claim",
        "link": "./projects/climateclaim.html"
    },
    {
        "title": "First JavaScript Project",
        "link": "./projects/jsproject.html"
    },
    {
        "title": "Tostada cooking-app",
        "link": "./projects/tostada.html"
    },
    {
        "title": "PinqPonq Studio",
        "link": "./projects/pinqponq.html"
    },
    {
        "title": "De Boekenzoeker",
        "link": "./projects/boekenzoeker.html"
    }
];

// Determine if the script is running in a subdirectory
const isSubdirectory = window.location.pathname.split('/').length > 2;

// Function to adjust link paths
const adjustPath = (link) => isSubdirectory ? `../${link}` : link;

// Function to generate list items
const generateList = (projects, parentElement) => {
  projects.forEach(project => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = adjustPath(project.link);
    a.textContent = project.title;
    li.appendChild(a);
    parentElement.appendChild(li);
  });
};

// Populate the projects menu
const projectsDropdown = document.getElementById("projectsDropdown");
if (projectsDropdown) {
  generateList(projects, projectsDropdown);
}

// Populate the footer projects list
const footerProjectsList = document.querySelector("footer #footerContents #footerProjects");
if (footerProjectsList) {
  generateList(projects, footerProjectsList);
}

headerButton.addEventListener('click', () => headerElement.classList.toggle('mobileExpanded'))