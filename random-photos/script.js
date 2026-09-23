const imageContainer = document.querySelector(".image-container");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    imageNum = 10;
    loadNewImage();
});

function loadNewImage() {
    for(let index=0; index < imageNum; index ++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainer.appendChild(newImg);
    }
}