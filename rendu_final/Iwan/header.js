var hamburgerButton = document.querySelector(".hamburger");
var navLinks = document.querySelector("nav");
var close = document.querySelector(".close");

hamburgerButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
})

close.addEventListener('click', ()=>{
    navLinks.classList.remove('active');
})