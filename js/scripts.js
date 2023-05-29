// call-back function to show/hide main menu on page
const showMenu = () => {
    const menuLinks = document.querySelector(".nav-content");
    const button = document.querySelector(".btn-nav");
    
    if (button.classList.contains("animated")) {
        button.classList.remove("animated");
        menuLinks.classList.remove("showNav");
        menuLinks.classList.add("hideNav");
    } else {
        button.classList.add("animated");
        menuLinks.classList.add("showNav");
        menuLinks.classList.remove("hidden");
        menuLinks.classList.remove("hideNav");
    }
};

// button set to listen for click event
const toggleButton = document.querySelector(".nav");
toggleButton.addEventListener("click", showMenu);


// Target all clicks on any element
document.addEventListener('click', (e) => 
{
    // Get button elements
    const showAboutContent = document.querySelector(".about-text-box");
    const buttonAbout = document.querySelector(".about-header-box");
    const projectHeader = document.querySelector(".project-header-box");
    const projectContent = document.querySelector(".project-content-box");

    // Get element class(es)
    let elementClass = e.target.className;

    // Show and scroll to the about section on the page
    switch (elementClass) {
        case 'open-about':
        case 'open-about-tag':
            if (showAboutContent.classList.contains("hidden")) {
                showAboutContent.classList.add("shown");
                showAboutContent.classList.remove("hidden");
                showAboutContent.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            } else {
                showAboutContent.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
            break;
        case 'close-about':
        case 'close-about-tag':
            buttonAbout.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            showAboutContent.classList.remove("shown");
            showAboutContent.classList.add("hidden");
            break;
        case 'open-project':
        case 'open-project-tag':
            if (projectContent.classList.contains("hidden")) {
                projectContent.classList.add("shown");
                projectContent.classList.remove("hidden");
                projectContent.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            } else {
                projectContent.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
            break;
        case 'close-project':
        case 'close-project-tag':
            projectHeader.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            projectContent.classList.remove("shown");
            projectContent.classList.add("hidden");
            break;
    }
});

// Get references to primary links
const homeLink= document.getElementById("homeLink");
const aboutLink= document.getElementById("aboutLink");
const projectLink= document.getElementById("projectLink");
const contactLink= document.getElementById("contactLink");

// Hide the primary menu and go to section of page linked to
homeLink.addEventListener('click', showMenu);
aboutLink.addEventListener('click', showMenu);
projectLink.addEventListener('click', showMenu);
contactLink.addEventListener('click', showMenu);