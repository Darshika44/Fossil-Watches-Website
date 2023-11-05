const box = document.getElementsByClassName("box")[0];
const left_arrow = document.getElementById("left-button");
const right_arrow = document.getElementById("right-button");

left_arrow.addEventListener("click", () => {
  box.scrollLeft += 100;
});
right_arrow.addEventListener("click", () => {
  box.scrollLeft -= 100;
});

const scroll_watch = document.getElementsByClassName("scroll_watch");
const main_watch = document.getElementsByClassName("main-watch")[0];
const svg = document.getElementById("svg");
const price = document.getElementsByTagName("h6")[0];
const span_number = document.getElementById("span_number");
const img = document.getElementsByClassName("img")[0];

scroll_watch[0].addEventListener('click', () => {
  main_watch.src = "img/watch.png";
  svg.innerHTML = '<text x="0%" y="90%">Gen 5</text>';
  price.innerText = "$359.00";
  span_number.innerText = 1;
  setTimeout(() => {
    img.style.bottom = "-100px";
  }, 500);
  setTimeout(() => {
    img.style.bottom = "-230px";
  }, 1000);
  setTimeout(() => {
    img.src = "img/img1.png";
  }, 1900);
  setTimeout(() => {
    img.style.bottom = "0px";
  }, 2300);
});

scroll_watch[1].addEventListener('click', () => {
  main_watch.src = "img/watch2.png";
  svg.innerHTML = '<text x="0%" y="90%">Gen 6</text>';
  price.innerText = "$459.00";
  span_number.innerText = 2;
  setTimeout(() => {
    img.style.bottom = "-100px";
  }, 500);
  setTimeout(() => {
    img.style.bottom = "-230px";
  }, 1000);
  setTimeout(() => {
    img.src = "img/img2.png";
  }, 1900);
  setTimeout(() => {
    img.style.bottom = "0px";
  }, 2300);
});

scroll_watch[2].addEventListener('click', () => {
  main_watch.src = "img/watch3.png";
  svg.innerHTML = '<text x="0%" y="90%">Gen 8</text>';
  price.innerText = "$659.00";
  span_number.innerText = 3;
  setTimeout(() => {
    img.style.bottom = "-100px";
  }, 500);
  setTimeout(() => {
    img.style.bottom = "-230px";
  }, 1000);
  setTimeout(() => {
    img.src = "img/img3.png";
  }, 1900);
  setTimeout(() => {
    img.style.bottom = "0px";
  }, 2300);
});

const cart = document.getElementById("cart");
const add_to_cart = document.getElementById("add_to_cart");

var a = 0;
cart.innerText = a;
add_to_cart.addEventListener('click', () => {
  a += 1;
  cart.innerText = a;
});
