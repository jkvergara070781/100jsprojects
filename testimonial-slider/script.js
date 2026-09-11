const testimonials = [
    {
        name: "Cherise G",
        photoUrl: "https://i.pravatar.cc/150?img=35",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
        name: "Rosetta Q",
        photoUrl: "https://i.pravatar.cc/150?img=44",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    },
    {
        name: "Constantine V",
        photoUrl: "https://i.pravatar.cc/150?img=12",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
];

const imgElement = document.querySelector("img");
const textElement = document.querySelector(".text");
const usernameElement = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial() {
    const{name, photoUrl, text} = testimonials[index];
    imgElement.src = photoUrl;
    textElement.innerText = text;
    usernameElement.innerText = name;
    index++;
    if (index === testimonials.length) {
        index = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
};

