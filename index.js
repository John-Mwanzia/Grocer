hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    navLinks = document.querySelector(".nav-links");
    searchCart = document.querySelector(".search-cart");
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
    searchCart.classList.toggle("open");
});