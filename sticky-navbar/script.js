const navContainer = document.querySelector(".nav-container");
const sectionContainer = document.querySelector(".section-container");

console.log(navContainer.offsetHeight);
console.log(sectionContainer.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    sectionContainer.offsetTop - navContainer.offsetHeight - 80
  ) {
    navContainer.classList.add("active");
  } else {
    navContainer.classList.remove("active");
  }
});
