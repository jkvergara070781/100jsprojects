const btns = document.querySelectorAll(".button");
const contents = document.querySelectorAll("article")
const wrapper = document.querySelector(".container");

wrapper.addEventListener("click", function(e) {
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach(function(btn){
            btn.classList.remove("live");
        });
        e.target.classList.add("live");

        contents.forEach(function(content){
            content.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live")
    }
});

