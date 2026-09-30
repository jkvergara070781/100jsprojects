const counterElement = document.querySelector(".counter");

const barElement = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();

function updateNum() {
    counterElement.innerText = idx + "%";
    barElement.style.width = idx + "%";

    idx++;

    if (idx < 101) {
        setTimeout(updateNum, 20);
    }
}