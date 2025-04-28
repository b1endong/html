const gif = document.getElementById("gif");
const no_btn = document.getElementById("no-btn");
const yes_btn = document.getElementById("yes-btn");
const title = document.getElementById("title");
const btn_container = document.querySelector(".btn-container");

yes_btn.addEventListener("click", function () {
    gif.src =
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXltM2FsNHRuODNnZWQybHB6eG1qOHY0NHVwN2ZpODNldzI1OWIxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/37jFFYnA5FrlH5fKKg/giphy.gif";
    title.innerHTML = "I love you tooooooo 😍";
    btn_container.remove();
});

no_location = no_btn.getBoundingClientRect();

no_btn.addEventListener("mouseover", function () {
    const maxX = window.innerWidth - no_location.width;
    const maxY = window.innerHeight - no_location.height;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    no_btn.style.left = randomX + "px";
    no_btn.style.top = randomY + "px";
});
