const navContainer = document.querySelector(".nav-container");
const sectionContainer = document.querySelector(".section-container");

window.addEventListener("scroll", () => {
    if (
        window.scrollY > sectionContainer.offsetTop - navContainer.offsetHeight - 50
    ) {
        navContainer.classList.add("active");
    } else {
        navContainer.classList.remove("active");
    }
});