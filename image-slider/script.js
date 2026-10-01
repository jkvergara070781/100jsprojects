const nextElement = document.querySelector(".next");
const prevElement = document.querySelector(".prev");
const imgElement = document.querySelectorAll("img");
const imageContainerElment = document.querySelector(".image-container");


let currentImg = 1;

let timeout;

nextElement.addEventListener("clink", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

prevElement.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg() {
    if (currentImg > imgElement.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgElement.length;
    }

    imageContainerElment.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
};