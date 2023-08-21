function toggleMenu() {
var menu = document.querySelector(".nav-options");
menu.classList.toggle("active");
}

function toggleMenu() {
var menu = document.querySelector(".nav-options");
var toggleButton = document.querySelector(".navbar-toggle");
menu.classList.toggle("active");
toggleButton.classList.toggle("active");
}

// Javascript to make change images upon clicking in the header div
// I didn't know how to make it change on clicking took the help of google

const header = document.querySelector(".header");
const backgroundImages = document.querySelectorAll(".background-image");
let activeIndex = 1; 

backgroundImages[0].style.opacity = 1;

header.addEventListener("click", () => {
activeIndex = (activeIndex + 1) % backgroundImages.length;

backgroundImages.forEach((image, index) => {
image.style.opacity = index === activeIndex ? 1 : 0;
});
});
const imageUrls = [
"b1.jpg",
"b2.jpg",
"b3.jpg",
];
backgroundImages.forEach((image, index) => {
image.style.backgroundImage = `url('${imageUrls[index]}')`;
});
function toggleMenu() {
var menu = document.querySelector(".nav-options");
var toggleButton = document.querySelector(".navbar-toggle");
menu.classList.toggle("active");
toggleButton.classList.toggle("active");
}
function closeMenu() {
var menu = document.querySelector(".nav-options");
var toggleButton = document.querySelector(".navbar-toggle");
menu.classList.remove("active");
toggleButton.classList.remove("active");
}