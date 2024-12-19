let center = document.querySelector(".center");
let lines = document.getElementsByClassName("line");

center.addEventListener("click", function () {
  lines[0].classList.toggle("left");
  lines[1].classList.toggle("middle");
  lines[2].classList.toggle("right");
});
