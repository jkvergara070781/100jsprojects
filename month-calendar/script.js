const monthElement= document.querySelector(".date h1");
const fullDateElement = document.querySelector(".date p");
const daysElement = document.querySelector(".days");

const currentMonth = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
const firstDay = (new Date(year, currentMonth, 1).getDay() + 6) % 7;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthElement.innerText = months[currentMonth];
fullDateElement.innerText = new Date(). toDateString();

let days = "";

for (let i = firstDay; i > 0; i --) {
    days += `<div class="empty"></div>`
}

for (let i = 1; i <= lastDay; i ++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`
    }
}

daysElement.innerHTML = days;