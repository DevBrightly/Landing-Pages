let menuBtn = document.querySelector(".menu");
let nav = document.querySelector("nav");
let menuClose = document.getElementById("menu-close");
let menuOpen = document.getElementById("menu-open");
let isOpen = false;


menuBtn.addEventListener('click', () => {
    isOpen = !isOpen; // Toggle the state
    
    if (isOpen) {
        menuClose.style.display = "none";
        menuOpen.style.display = "block";
        nav.classList.add("open");
    } else {
        menuClose.style.display = "block";
        menuOpen.style.display = "none";
        nav.classList.remove("open");
    }
});

document.body.addEventListener('click', (event) => {
    if (!event.target.closest('.menu')) {
        isOpen = false;
        menuClose.style.display = "block";
        menuOpen.style.display = "none";
        nav.classList.remove("open");
    }
});