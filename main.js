const gif = document.getElementById("gif");
const no_btn = document.getElementById("no-btn");
const yes_btn = document.getElementById("yes-btn");
const title = document.getElementById("title");
const btn_container = document.querySelector(".btn-container");

yes_btn.addEventListener("click", function () {
    title.innerHTML = "I know it 😍";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
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
