const controlBtn = document.querySelector(".btn");
const closeIcon = document.querySelector(".fa-circle-xmark");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("iframe");

controlBtn.addEventListener('click', () => {
    trailerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
    trailerContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});