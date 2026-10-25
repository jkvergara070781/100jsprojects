const bgImageElement = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImage();
});

function updateImage() {
    bgImageElement.style.opacity = 1 - window.pageYOffset / 900;
    bgImageElement.style.backgroundSize = 180 - window.pageYOffset / 12 + "%";
};