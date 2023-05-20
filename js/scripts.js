// This function will show or hide the site menu when the icon bar is clicked
const showMenu = () => {
    const menuLinks = document.querySelector(".nav-content");
    const button = document.querySelector(".btn-nav");
    
    if (button.classList.contains("animated")) {
        button.classList.remove("animated");
        menuLinks.classList.remove("showNav");
        menuLinks.classList.add("hidden");
        menuLinks.classList.add("hideNav");
    } else {
        button.classList.add("animated");
        menuLinks.classList.add("showNav");
        menuLinks.classList.remove("hidden");
        menuLinks.classList.remove("hideNav");
    }
};

// Set menu button to listen for click event
const toggleButton = document.querySelector(".nav");
toggleButton.addEventListener("click", showMenu);