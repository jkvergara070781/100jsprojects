const birthdateInput = document.getElementById("birthdate-input");
const calculateBtn = document.getElementById("calculate-btn");
const resultText = document.getElementById("result-text");

function calculateAge() {
    const birthdate = birthdateInput.value;
    if (birthdate === "") {
        alert("Please enter your birthday!");
    } else {
        const age = getAge(birthdate);
        resultText.innerText = `Your age is ${age} ${age > 1? "years":"year"} old.`
    }
}

function getAge(birthdate) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdate);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age --;
    }
    return age;
}

calculateBtn.addEventListener("click", calculateAge);