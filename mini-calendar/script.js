const monthNameElement = document.getElementById("month-name");
const dayNameElement = document.getElementById("day-name");
const dayNumberElement = document.getElementById("day-number");
const yearElement = document.getElementById("year")

const date = new Date();

monthNameElement.innerText = date.toLocaleString("en", {
    month: "long",
});

dayNameElement.innerText = date.toLocaleString("en", {
    weekday: "long",
});

dayNumberElement.innerText = date.getDate();

yearElement.innerText = date.getFullYear();