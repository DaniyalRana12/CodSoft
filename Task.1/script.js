const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => 
{
navLinks.classList.toggle("active");
});

function closeNav() {
navLinks.classList.remove("active");
}
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
backToTopButton.style.display = "block";
} else {
backToTopButton.style.display = "none";
}
});
backToTopButton.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});
