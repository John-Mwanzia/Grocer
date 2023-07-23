hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
});